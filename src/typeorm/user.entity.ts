import { 
  Column,
  PrimaryGeneratedColumn, 
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from "typeorm";
// import { Exclude } from 'class-transformer';
import { Address } from "./address.entity";
// import { Comment } from "./comment.entity";
import { Post } from "./Post.entity";
export class User{
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;
  
  @Column({
    name: 'username',
    nullable: false,
    default: '',
    unique: true
  })
  public username: string;

  @Column({
    name: 'email', // for real name
    nullable: false,
    default: '',
    unique: true
  })
  public email: string;

  @Column({
    nullable: false,
    default: '',
  })
  // @Exclude()
  public password: string;

  // @OneToOne(() => Address)
  // @JoinColumn()
  // address: Address;

  // @OneToMany(() => Post, (post: Post) => post.author)
  // posts: Post[];

  @CreateDateColumn({type: 'timestamp', default: () => 'NOW()' })
  public created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  public updated_at: Date;

  @DeleteDateColumn({type: 'timestamp', default: () => 'NOW()' })
  public deleted_at: Date;
}