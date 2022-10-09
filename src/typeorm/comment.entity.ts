import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'comment_id',
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

  // @Column({
  //   nullable: false,
  //   default: '',
  //   name: 'createDateTime',
  // })

  // createDateTime: Date;

  // @Column({
  //   nullable: false,
  //   default: '',
  //   name: 'lastChangedDateTime',
  // })

  // lastChangedDateTime: Date;
}