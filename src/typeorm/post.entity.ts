import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Category } from './category.entity';
 
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public title: string;
 
  @Column()
  public content: string;
 
  @Column({ nullable: true })
  public category?: string;
 
  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;
 
  @ManyToMany(() => Category)
  @JoinTable()
  public categories: Category[];
}