import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdatePostDto {
  @IsNumber()
  // @IsOptional()
  id: number;

  @IsString({ each: true })
  // @IsNotEmpty()
  // @IsOptional()
  content: string[];

  @IsString()
  // @IsNotEmpty()
  // @IsOptional()
  title: string;
}