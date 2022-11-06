import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn
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

  @CreateDateColumn()
  createdAt : String

  @UpdateDateColumn()
  updtedAt : String

  // @OneToOne(() => User, (user: User) => user.address)
  // public user: User;
}