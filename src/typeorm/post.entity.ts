import { 
  Column, 
  Entity, 
  JoinTable, 
  ManyToMany, 
  ManyToOne, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './user.entity';
import { Category } from './category.entity';
 
@Entity()
export class Post {
  // @PrimaryGeneratedColumn()
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  public id: number;
 
  @Column()
  public title: string;
 
  @Column()
  public content: string;
 
  @Column({ nullable: true })
  public category?: string;

  @CreateDateColumn()
  createdAt : String

  @UpdateDateColumn()
  updtedAt : String
 
  // @ManyToOne(() => User, (author: User) => author.posts)
  // public author: User;
 
  // @ManyToMany(() => Category)
  // @JoinTable()
  // public categories: Category[];
}