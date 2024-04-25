import { Column, Entity, ManyToOne } from 'typeorm';
import { IsNumber } from 'class-validator';

import { sharedScheme } from '../../../shared/sharedScheme';
import { User } from '../../usersModule/entities/user.entity';
import { Wish } from '../../../modules/wishesModule/entities/wish.entity';

@Entity('offer')
export class Offer extends sharedScheme {
  @Column()
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  amount: number;

  @Column({ default: false })
  hidden: boolean;

  @ManyToOne(() => User, (user) => user.offers)
  user: User;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  item: Wish;
}
