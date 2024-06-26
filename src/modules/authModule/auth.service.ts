import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../usersModule/users.service';
import { SignUpDto } from './dto/signUp.dto';
import { HashService } from '../hashModule/hash.services';
import { User } from '../usersModule/entities/user.entity';
import { TToken, TUser } from 'src/shared/types';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly hashService: HashService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.findOne(username);

    if (!user || !this.hashService.compare(password, user.password))
      return null;

    return user;
  }

  signup(dto: SignUpDto): Promise<TUser> {
    return this.userService.save(dto);
  }

  async signin(user: TUser): Promise<TToken> {
    const token = this.jwtService.sign({
      id: user.id,
      username: user.username,
    });
    return {
      access_token: token,
    };
  }
}
