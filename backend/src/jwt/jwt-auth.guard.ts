import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { ALLOW_WHILE_PENDING } from './allow-while-pending.decorator';
import type { AuthedRequest } from './authed-request';
import type { JwtPayload } from './jwt-payload';

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(
		private readonly jwtService: JwtService,
		private readonly reflector: Reflector,
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<Request>();
		const token = this.extractToken(request);

		if (!token) {
			throw new UnauthorizedException('token manquant');
		}

		let payload: JwtPayload;
		try {
			payload = await this.jwtService.verifyAsync<JwtPayload>(token);
		} catch {
			throw new UnauthorizedException('token invalide');
		}

		const allowWhilePending = this.reflector.getAllAndOverride<boolean>(ALLOW_WHILE_PENDING, [
			context.getHandler(),
			context.getClass(),
		]);

		if (!payload.emailVerified && !allowWhilePending) {
			throw new ForbiddenException('adresse mail non verifiee');
		}

		(request as AuthedRequest).user = payload;
		return true;
	}

	private extractToken(request: Request): string | undefined {
		const header = request.headers.authorization;
		if (!header) {
			return undefined;
		}
		const [scheme, token] = header.split(' ');
		return scheme === 'Bearer' ? token : undefined;
	}
}
