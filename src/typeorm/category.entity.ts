import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
@Entity()
export class Category {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  public id: number;
 
  @Column()
  public name: string;

  @CreateDateColumn()
  createdAt : String

  @UpdateDateColumn()
  updtedAt : String
}