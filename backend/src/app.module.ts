import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { authConfig } from './config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true, load: [authConfig] }), PrismaModule, AuthModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
