import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WishlistsService } from '../wishlistModule/wishlist.service';
import { WishlistsController } from '../wishlistModule/wishlist.controller';
import { Wishlist } from './entities/wishlist.entity';
import { UsersModule } from '../usersModule/users.module';
import { WishesModule } from '../wishesModule/wishes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist]), UsersModule, WishesModule],
  controllers: [WishlistsController],
  providers: [WishlistsService],
})
export class WishlistsModule {}