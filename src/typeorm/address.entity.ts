import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
    // BeforeInsert,
    // BeforeUpdate,
    // BeforeRemove,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  public id: number;
 
  @Column()
  public street: string;
 
  @Column()
  public city: string;
 
  @Column()
  public country: string;
  
  @CreateDateColumn({type: 'timestamp', default: () => 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  updated_at: Date;

  @DeleteDateColumn({type: 'timestamp', default: () => 'NOW()' })
  deleted_at: Date;
}