import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { UsersModule } from '../usersModule/users.module';
import { jwtOptions } from '../../configFiles/JWT.config';
import { STRATEGIES } from './strategies/index';
import { GUARDS } from './guards';
import { HashModule } from '../hashModule/hash.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync(jwtOptions()),
    UsersModule,
    HashModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, ...STRATEGIES, ...GUARDS],
})
export class AuthModule {}
