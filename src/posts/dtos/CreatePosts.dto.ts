import {
    IsNotEmpty,
    IsDateString
} from 'class-validator';

export class CreatePostDto {
    
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsDateString()
  title: string;
}