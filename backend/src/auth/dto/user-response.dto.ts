export class UserResponseDto {
	id!: string;
	email!: string;
	emailVerified!: boolean;
	subscribed!: boolean;
	createdAt!: Date;
	firstName!: string;
	lastName!: string;
	dateOfBirth!: Date;
	city!: string;
	pfpUrl?: string | null;
}
