import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';
import { User } from "./user.entity"
@Entity()
export class Comment {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column({
    nullable: false,
    default: 'hai',
  })

  username: string;

  @Column({
    nullable: false,
    default: '',
    name: 'title',
  })

  title: string;

  @Column({
    nullable: false,
    default: '',
    name: 'comment',
  })

  comment: string;

  @Column({ default: true })
  complete: boolean;

  // @OneToOne(() => User, (user) => user.id)
  // @JoinColumn()
  // user: User

  @Column({ nullable: true })
  userId: number;

  @CreateDateColumn({type: 'timestamp', default: () => 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  updated_at: Date;

  @DeleteDateColumn({type: 'timestamp', default: () => 'NOW()' })
  deleted_at: Date;
}