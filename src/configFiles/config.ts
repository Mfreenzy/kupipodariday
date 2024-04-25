import { User } from "src/modules/usersModule/entities/user.entity";
import { Wish } from "src/modules/wishesModule/entities/wish.entity";
import { Offer } from "src/modules/OffersModule/entities/offer.entity";
import { Wishlist } from "src/modules/wishlistModule/entities/wishlist.entity";

export const config = () => ({
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  jwtExp: process.env.JWT_EXP,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    // entities: [User, Wish, Offer, Wishlist],
    synchronize: true,
    logging: false,
  },
});
