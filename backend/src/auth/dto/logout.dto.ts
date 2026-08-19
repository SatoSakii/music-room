import { IsString, MaxLength } from 'class-validator';

export class LogoutDto {
	@IsString()
	@MaxLength(512)
	refreshToken!: string;
}
