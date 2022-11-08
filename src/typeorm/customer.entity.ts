import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
    name: 'email',
  })
  email: string;

  // @OneToOne(() => User, (user: User) => user.address)
  // user: User;
 
  @CreateDateColumn({type: 'timestamp', default: () => 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  updated_at: Date;

  @DeleteDateColumn({type: 'timestamp', default: () => 'NOW()' })
  deleted_at: Date;
}