import { BadRequestException, Inject, Injectable, NotImplementedException } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { createHash, randomBytes, randomInt } from 'crypto';
import * as bcrypt from 'bcrypt';
import { MusicType, TokenType } from '../../generated/prisma/client';
import type { User, UserData } from '../../generated/prisma/client';
import { authConfig } from '../config';
import type { JwtPayload } from '../jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthResponseDto, MessageResponseDto, UserResponseDto } from './dto';

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly jwtService: JwtService,
		@Inject(authConfig.KEY) private readonly config: ConfigType<typeof authConfig>,
	) {}

	async signup(
		email: string,
		password: string,
		firstName: string,
		lastName: string,
		dateOfBirth: string,
		city: string,
		musicPreference: MusicType[],
		pfpUrl?: string,
	): Promise<AuthResponseDto> {
		const existing = await this.prisma.user.findUnique({ where: { email } });
		if (existing && existing.emailVerifiedAt)
			throw new BadRequestException(`Email ${email} already exist`);
		if (existing && !existing.emailVerifiedAt)
			throw new BadRequestException(
				`Email ${email} already exist, but need to be verified, check your emails`,
			);

		const passwordHash = await bcrypt.hash(password, this.config.bcryptRounds);
		const code = randomInt(100000, 1000000).toString();
		const expiresAt = new Date(Date.now() + this.config.verificationCodeTtl * 1000);

		const { user, data } = await this.prisma.$transaction(async (tx) => {
			const user = await tx.user.create({ data: { email, passwordHash } });
			const data = await tx.userData.create({
				data: {
					userId: user.id,
					pfpUrl,
					firstName,
					lastName,
					dateOfBirth: new Date(dateOfBirth),
					city,
					musicPreference,
				},
			});
			await tx.authToken.create({
				data: {
					userId: user.id,
					type: TokenType.EMAIL_VERIFICATION,
					tokenHash: this.hashToken(code),
					expiresAt,
				},
			});
			return { user, data };
		});

		// await this.mail.sendVerificationEmail(email, code); A DECOMMENTER QUAND ON AURA LE SERVICE MAIL
		return this.buildAuthResponse(user, data);
	}

	login(email: string, password: string): Promise<AuthResponseDto> {
		void { email, password };
		throw new NotImplementedException();
	}

	verify(email: string, code: string): Promise<MessageResponseDto> {
		void { email, code };
		throw new NotImplementedException();
	}

	refresh(refreshToken: string): Promise<AuthResponseDto> {
		void refreshToken;
		throw new NotImplementedException();
	}

	logout(userId: string, refreshToken: string): Promise<MessageResponseDto> {
		void { userId, refreshToken };
		throw new NotImplementedException();
	}

	me(userId: string): Promise<UserResponseDto> {
		void userId;
		throw new NotImplementedException();
	}

	private hashToken(token: string): string {
		return createHash('sha256').update(token).digest('hex');
	}

	private toUserResponse(user: User, data: UserData): UserResponseDto {
		return {
			id: user.id,
			email: user.email,
			emailVerified: user.emailVerifiedAt !== null,
			subscribed: user.subscribed,
			createdAt: user.createdAt,
			firstName: data.firstName,
			lastName: data.lastName,
			dateOfBirth: data.dateOfBirth,
			city: data.city,
			pfpUrl: data.pfpUrl,
		};
	}

	private async issueRefreshToken(userId: string): Promise<string> {
		const refreshToken = randomBytes(48).toString('hex');
		await this.prisma.refreshToken.create({
			data: {
				userId,
				tokenHash: this.hashToken(refreshToken),
				expiresAt: new Date(Date.now() + this.config.refreshTokenTtl * 1000),
			},
		});
		return refreshToken;
	}

	private async buildAuthResponse(user: User, data: UserData): Promise<AuthResponseDto> {
		const payload: JwtPayload = {
			sub: user.id,
			email: user.email,
			emailVerified: user.emailVerifiedAt !== null,
		};

		return {
			accessToken: await this.jwtService.signAsync(payload),
			refreshToken: await this.issueRefreshToken(user.id),
			tokenType: 'Bearer',
			expiresIn: this.config.accessTokenTtl,
			user: this.toUserResponse(user, data),
		};
	}
}
