import { 
  BaseEntity, 
  Column, 
  Entity, 
  JoinColumn, 
  OneToMany, 
  OneToOne,
  PrimaryGeneratedColumn, 
  Unique 
} from "typeorm";
import { Exclude } from 'class-transformer';
import { Address } from "./address.entity";
// import { Comment } from "./comment.entity";
import { Post } from "./Post.entity";
@Entity()
@Unique(['username'])
@Unique(['email'])

export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  @Exclude()
  password: string;

  // @OneToOne(() => Address)
  // @JoinColumn()
  // public address: Address;

  // @OneToMany(() => Post, (post: Post) => post.author)
  // public posts: Post[];
}