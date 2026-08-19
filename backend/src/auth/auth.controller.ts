import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AllowWhilePending, JwtAuthGuard } from '../jwt';
import type { AuthedRequest } from '../jwt';
import { AuthService } from './auth.service';
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

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('signup')
	signup(@Body() body: SignupDto): Promise<AuthResponseDto> {
		return this.authService.signup(
			body.email,
			body.password,
			body.firstName,
			body.lastName,
			body.dateOfBirth,
			body.city,
		);
	}

	@Post('login')
	@HttpCode(HttpStatus.OK)
	login(@Body() body: LoginDto): Promise<AuthResponseDto> {
		return this.authService.login(body.email, body.password);
	}

	@Post('verify')
	@HttpCode(HttpStatus.OK)
	verify(@Body() body: VerifyDto): Promise<MessageResponseDto> {
		return this.authService.verify(body.email, body.code);
	}

	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	refresh(@Body() body: RefreshDto): Promise<AuthResponseDto> {
		return this.authService.refresh(body.refreshToken);
	}

	@Post('logout')
	@HttpCode(HttpStatus.OK)
	@UseGuards(JwtAuthGuard)
	@AllowWhilePending()
	logout(@Req() req: AuthedRequest, @Body() body: LogoutDto): Promise<MessageResponseDto> {
		return this.authService.logout(req.user.sub, body.refreshToken);
	}

	@Get('me')
	@UseGuards(JwtAuthGuard)
	me(@Req() req: AuthedRequest): Promise<UserResponseDto> {
		return this.authService.me(req.user.sub);
	}
}
