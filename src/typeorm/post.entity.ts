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

  @CreateDateColumn({ type: "timestamp", nullable: true ,default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt : Date

  @UpdateDateColumn({ type: "timestamp", nullable: true ,default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updtedAt : Date
 
  // @ManyToOne(() => User, (author: User) => author.posts)
  // public author: User;
 
  // @ManyToMany(() => Category)
  // @JoinTable()
  // public categories: Category[];
}