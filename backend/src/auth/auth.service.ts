import { Injectable, NotImplementedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthResponseDto, MessageResponseDto, UserResponseDto } from './dto';

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly jwtService: JwtService,
	) {}

	signup(
		email: string,
		password: string,
		firstName: string,
		lastName: string,
		dateOfBirth: string,
		city: string,
	): Promise<AuthResponseDto> {
		void { email, password, firstName, lastName, dateOfBirth, city };
		throw new NotImplementedException();
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
}
