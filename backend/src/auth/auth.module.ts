import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { authConfig } from '../config';
import { JwtAuthGuard } from '../jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
	imports: [
		ConfigModule.forFeature(authConfig),
		JwtModule.registerAsync({
			imports: [ConfigModule.forFeature(authConfig)],
			inject: [authConfig.KEY],
			useFactory: (config: ConfigType<typeof authConfig>) => ({
				secret: config.jwtSecret,
				signOptions: { expiresIn: config.accessTokenTtl, algorithm: 'HS256' },
			}),
		}),
		PrismaModule,
	],
	controllers: [AuthController],
	providers: [AuthService, JwtAuthGuard],
	exports: [AuthService, JwtModule],
})
export class AuthModule {}
