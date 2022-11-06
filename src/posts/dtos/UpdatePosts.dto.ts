import { 
  IsString, 
  IsNumber, 
  IsOptional,
  IsNotEmpty
} from 'class-validator';

export class UpdatePostDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  content: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;

}