import { registerAs } from '@nestjs/config';

function requireEnv(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`variable d'environnement manquante: ${name}`);
	}
	return value;
}

function intEnv(name: string, fallback: number): number {
	const raw = process.env[name];
	if (!raw) {
		return fallback;
	}
	const parsed = Number.parseInt(raw, 10);
	if (Number.isNaN(parsed) || parsed <= 0) {
		throw new Error(`variable d'environnement invalide: ${name}`);
	}
	return parsed;
}

export const authConfig = registerAs('auth', () => ({
	jwtSecret: requireEnv('JWT_SECRET'),
	accessTokenTtl: intEnv('ACCESS_TOKEN_TTL', 3600),
	refreshTokenTtl: intEnv('REFRESH_TOKEN_TTL', 2592000),
	verificationCodeTtl: intEnv('VERIFICATION_CODE_TTL', 900),
	bcryptRounds: intEnv('BCRYPT_ROUNDS', 12),
}));

export default authConfig;
