import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'customer_id',
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
    name: 'email_address',
  })
  email: string;

  @CreateDateColumn({ type: "timestamp", nullable: true ,default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt : Date

  @UpdateDateColumn({ type: "timestamp", nullable: true ,default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updtedAt : Date
}