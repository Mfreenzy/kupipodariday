import { Length, IsUrl, IsEmail } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';

import { sharedScheme } from '../../../shared/sharedScheme';
import { Wish } from '../../wishesModule/entities/wish.entity';
import { Offer } from '../../offersModule/entities/offer.entity';
import { Wishlist } from '../../wishlistModule/entities/wishlist.entity';

@Entity('user')
export class User extends sharedScheme {
  @Column({ unique: true })
  @Length(2, 30)
  username: string;

  @Column({ default: 'Пока ничего не рассказал о себе' })
  @Length(2, 200)
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  @IsUrl()
  avatar: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  @OneToMany(() => Offer, (offer) => offer.user) // Указываем связь с сущностью Offer
  offers: Offer[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner)
  wishlists: Wishlist[];
}
