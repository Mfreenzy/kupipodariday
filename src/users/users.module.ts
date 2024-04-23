import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DtoModule } from './dto/dto.module';
import { EntitiesModule } from './entities/entities.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [DtoModule, EntitiesModule]
})
export class UsersModule {}
