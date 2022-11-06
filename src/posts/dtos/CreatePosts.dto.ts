import {
    IsNotEmpty,
    IsDateString
} from 'class-validator';

export class CreatePostDto {
    
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsDateString()
  title: string;
}