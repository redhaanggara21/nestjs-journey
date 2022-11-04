import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
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

  @Column({ type: 'timestamptz', nullable: true }) //  recommended
  created_time: Date;

  @Column({ type: 'timestamptz',  nullable: true }) // Not recommended is used timestamp
  updated_time: Date;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User

  @Column({ nullable: true })
  userId: bigint;
}