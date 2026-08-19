import type { Request } from 'express';
import type { JwtPayload } from './jwt-payload';

export interface AuthedRequest extends Request {
	user: JwtPayload;
}
