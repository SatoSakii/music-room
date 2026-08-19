import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
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
import { AllowWhilePending, JwtAuthGuard } from '../jwt';
import type { AuthedRequest } from '../jwt';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('signup')
	signup(@Body() body: SignupDto): Promise<AuthResponseDto> {
		return this.authService.signup(body);
	}

	@Post('login')
	@HttpCode(HttpStatus.OK)
	login(@Body() body: LoginDto): Promise<AuthResponseDto> {
		return this.authService.login(body);
	}

	@Post('verify')
	@HttpCode(HttpStatus.OK)
	verify(@Body() body: VerifyDto): Promise<MessageResponseDto> {
		return this.authService.verify(body);
	}

	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	refresh(@Body() body: RefreshDto): Promise<AuthResponseDto> {
		return this.authService.refresh(body);
	}

	@Post('logout')
	@HttpCode(HttpStatus.OK)
	@UseGuards(JwtAuthGuard)
	@AllowWhilePending()
	logout(@Req() req: AuthedRequest, @Body() body: LogoutDto): Promise<MessageResponseDto> {
		return this.authService.logout(req.user.sub, body);
	}

	@Get('me')
	@UseGuards(JwtAuthGuard)
	me(@Req() req: AuthedRequest): Promise<UserResponseDto> {
		return this.authService.me(req.user.sub);
	}
}
