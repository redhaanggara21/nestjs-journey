import { 
  IsString, 
  IsNumber, 
  IsOptional,
  IsNotEmpty
} from 'class-validator';
export class CreatePostDto {
    
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  content: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;
}