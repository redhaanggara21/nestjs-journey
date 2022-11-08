import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;
 
  @Column()
  street: string;
 
  @Column()
  city: string;
 
  @Column()
  country: string;
  
  @Column()
  @CreateDateColumn({type: 'timestamp', default: () => 'NOW()' })
  created_at: Date;

  @Column()
  @UpdateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  updated_at: Date;

  @Column()
  @DeleteDateColumn({type: 'timestamp', default: () => 'NOW()' })
  deleted_at: Date;
}