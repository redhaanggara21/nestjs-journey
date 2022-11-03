// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
// import * as bcrypt from "bcrypt"

@Entity()
@Unique(['username'])

export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  // @OneToMany(type => Todo, todo => todo.user, { eager: true })
  // todo: Todo[]

  // @OneToOne(type => UserInfo, { eager: true })
  // @JoinColumn()
  // user_info: UserInfo

  // async validatePassword(password: string): Promise<boolean> {
  //     const hash = await bcrypt.hash(password, this.salt)
  //     return hash === this.password
  // }
}