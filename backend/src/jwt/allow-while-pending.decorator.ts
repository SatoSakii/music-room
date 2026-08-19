import { SetMetadata } from '@nestjs/common';

export const ALLOW_WHILE_PENDING = 'allowWhilePending';

export const AllowWhilePending = () => SetMetadata(ALLOW_WHILE_PENDING, true);
