import {
    // Contains,
    // Length,
    // IsDate,
    // MinLength,
    // MaxLength,
    IsNotEmpty,
    // Transform,
    // MinDate,
    IsOptional,
    IsDateString
    // IsEmail
  } from 'class-validator';

// import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export class CreateCommentDto {
    
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  comment: string;

  // @IsNotEmpty()
  // @Transform( ({ value }) => new Date(value))
  // @IsDate()
  // @MinDate(new Date())
  // @IsOptional()
  @IsDateString()
  created_time: Date;

  // @IsNotEmpty()
  // @Transform( ({ value }) => new Date(value))
  // @IsDate()
  // @MinDate(new Date())
  // @IsOptional()
  @IsDateString()
  updated_time: Date;
}