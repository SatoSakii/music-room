export class UserResponseDto {
	id!: string;
	email!: string;
	emailVerified!: boolean;
	subscribed!: boolean;
	createdAt!: Date;
	firstName?: string | null;
	lastName?: string | null;
	pfpUrl?: string | null;
}
