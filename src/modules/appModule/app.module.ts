import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { DatabaseConfig } from '../../configFiles/database.config';
import { config } from '../../configFiles/config';
import { AppController } from './app.controller';
import { UsersModule } from '../usersModule/users.module';
import { WishesModule } from '../wishesModule/wishes.module';
import { WishlistsModule } from '../wishlistModule/wishlist.module';
import { OffersModule } from '../offersModule/offers.module';
import { AuthModule } from '../authModule/auth.module';
import { loggerConfig } from 'src/configFiles/logger.config';
import { HashModule } from '../hashModule/hash.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    WinstonModule.forRoot(loggerConfig),
    UsersModule,
    WishesModule,
    WishlistsModule,
    OffersModule,
    AuthModule,
    HashModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
