import { IsEmail, IsString, Matches, MaxLength } from 'class-validator';

export class VerifyDto {
	@IsEmail()
	@MaxLength(254)
	email!: string;

	@IsString()
	@Matches(/^\d{6}$/, { message: 'le code doit contenir 6 chiffres' })
	code!: string;
}
