import {
	ArrayMaxSize,
	ArrayMinSize,
	ArrayUnique,
	IsArray,
	IsDateString,
	IsEmail,
	IsEnum,
	IsOptional,
	IsString,
	IsUrl,
	Length,
	Matches,
	MaxLength,
} from 'class-validator';
import { MusicType } from '../../../generated/prisma/enums';

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

	@IsArray()
	@ArrayMinSize(3, { message: 'choisis au moins 3 genres musicaux' })
	@ArrayMaxSize(10, { message: 'pas plus de 10 genres musicaux' })
	@ArrayUnique({ message: 'genres musicaux en double' })
	@IsEnum(MusicType, { each: true, message: 'genre musical inconnu' })
	musicPreference!: MusicType[];

	@IsOptional()
	@IsUrl({ protocols: ['http', 'https'], require_protocol: true }, { message: 'pfpUrl invalide' })
	@MaxLength(2048)
	pfpUrl?: string;
}
