import { IsEmail, IsOptional, IsString, Length, Matches, MaxLength } from 'class-validator';

export class SignupDto {
	@IsEmail({}, { message: 'email invalide' })
	@MaxLength(254)
	email!: string;

	@IsString()
	@Length(8, 72)
	@Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
		message: 'le mot de passe doit contenir une minuscule, une majuscule et un chiffre',
	})
	password!: string;

	@IsOptional()
	@IsString()
	@MaxLength(50)
	firstName?: string;

	@IsOptional()
	@IsString()
	@MaxLength(50)
	lastName?: string;
}
