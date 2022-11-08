import { 
  Column, 
  Entity, 
  JoinTable, 
  ManyToMany, 
  ManyToOne, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';
import { User } from './user.entity';
import { Category } from './category.entity';
 
@Entity()
export class Post {
  // @PrimaryGeneratedColumn()
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;
 
  @Column()
  title: string;
 
  @Column()
  content: string;
 
  @Column({ nullable: true })
  category?: string;

  @CreateDateColumn({type: 'timestamp', default: () => 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  updated_at: Date;

  @DeleteDateColumn({type: 'timestamp', default: () => 'NOW()' })
  deleted_at: Date;

}