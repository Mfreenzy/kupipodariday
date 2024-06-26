import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { WishlistsService } from '../wishlistModule/wishlist.service';
import { CreateWishlistDto } from './dto/createWishlist.dto';
import { JwtAuthGuard } from '../authModule/guards/jwtAuth.guard';
import { UpdateWishlistDto } from './dto/updateWishlist.dto';
import { Wishlist } from './entities/wishlist.entity';
import { TUserRequest } from 'src/shared/types';

@UseGuards(JwtAuthGuard)
@Controller('wishlistlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Get()
  findAll(): Promise<Wishlist[]> {
    return this.wishlistsService.findAll();
  }

  @Post()
  create(
    @Body() dto: CreateWishlistDto,
    @Req() { user }: TUserRequest,
  ): Promise<Wishlist> {
    return this.wishlistsService.create(dto, user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Wishlist> {
    return this.wishlistsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdateWishlistDto,
    @Req() { user }: TUserRequest,
  ): Promise<Wishlist> {
    return this.wishlistsService.update(id, dto, user.id);
  }

  @Delete(':id')
  removeOne(
    @Param('id') id: number,
    @Req() { user }: TUserRequest,
  ): Promise<Wishlist> {
    return this.wishlistsService.removeOne(id, user.id);
  }
}
