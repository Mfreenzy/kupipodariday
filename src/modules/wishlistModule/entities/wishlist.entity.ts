import { Length, MaxLength } from 'class-validator';
import { Column, Entity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

import { sharedScheme } from '../../../shared/sharedScheme';
import { User } from '../../usersModule/entities/user.entity';
import { Wish } from '../../../modules/wishesModule/entities/wish.entity';

@Entity()
export class Wishlist extends sharedScheme {
  @Column()
  @Length(1, 250)
  name: string;

  @Column({ nullable: true })
  @MaxLength(1500)
  description: string;

  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user.wishlists)
  owner: User;

  @ManyToMany(() => Wish)
  @JoinTable()
  items: Wish[];
}
