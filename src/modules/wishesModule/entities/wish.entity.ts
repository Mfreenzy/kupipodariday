import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import {
  IsUrl,
  Length,
  IsNumber,
  IsPositive,
  IsDecimal,
} from 'class-validator';

import { sharedScheme } from '../../../shared/sharedScheme';
import { User } from '../../usersModule/entities/user.entity';
import { Offer } from '../../../modules/OffersModule/entities/offer.entity';

@Entity()
export class Wish extends sharedScheme {
  @Column()
  @Length(1, 250)
  name: string;

  @Column()
  @IsUrl()
  link: string;

  @Column()
  @IsUrl()
  image: string;

  @Column()
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  price: number;

  @Column({ default: 0 })
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  raised: number;

  @Column()
  @Length(1, 1024)
  description: string;

  @Column({ default: 0 })
  @IsDecimal()
  copied: number;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @OneToMany(() => Offer, (offer) => offer.item)
  offers: Offer[];
}
