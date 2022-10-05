import {
    Contains,
    Length,
    IsDate
  } from 'class-validator';

// import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export class CreateCommentDto {
    
    @Length(3, 20)
    username: string;

    @Length(3, 20)
    title: string;

    @Contains('hello')
    comment: string;

    @IsDate()
    createDateTime: Date;

    @IsDate()
    lastChangedDateTime: Date;
}