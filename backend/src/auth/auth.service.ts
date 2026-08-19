import { Injectable, NotImplementedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import {
	AuthResponseDto,
	LoginDto,
	LogoutDto,
	MessageResponseDto,
	RefreshDto,
	SignupDto,
	UserResponseDto,
	VerifyDto,
} from './dto';

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly jwtService: JwtService,
	) {}

	signup(dto: SignupDto): Promise<AuthResponseDto> {
		void dto;
		throw new NotImplementedException();
	}

	login(dto: LoginDto): Promise<AuthResponseDto> {
		void dto;
		throw new NotImplementedException();
	}

	verify(dto: VerifyDto): Promise<MessageResponseDto> {
		void dto;
		throw new NotImplementedException();
	}

	refresh(dto: RefreshDto): Promise<AuthResponseDto> {
		void dto;
		throw new NotImplementedException();
	}

	logout(userId: string, dto: LogoutDto): Promise<MessageResponseDto> {
		void userId;
		void dto;
		throw new NotImplementedException();
	}

	me(userId: string): Promise<UserResponseDto> {
		void userId;
		throw new NotImplementedException();
	}
}
