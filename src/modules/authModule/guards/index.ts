import { JwtAuthGuard } from './jwtAuth.guard';
import { LocalAuthGuard } from './localAuth.guard';

export const GUARDS = [LocalAuthGuard, JwtAuthGuard];
