import { IsDateString, IsEmail, IsString, Length, Matches, MaxLength } from 'class-validator';

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

	@IsString()
	@Length(1, 50)
	firstName!: string;

	@IsString()
	@Length(1, 50)
	lastName!: string;

	@IsDateString({}, { message: 'date de naissance invalide (format ISO attendu)' })
	dateOfBirth!: string;

	@IsString()
	@Length(1, 100)
	city!: string;
}
