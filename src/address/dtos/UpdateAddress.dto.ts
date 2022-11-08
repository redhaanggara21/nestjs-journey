import { 
    IsDate,
    IsNotEmpty
} from "class-validator";

export class UpdateAddressDto {

    @IsNotEmpty()
    street: string;
   
    @IsNotEmpty()
    city: string;
   
    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    // @IsDate()
    updated_at: Date;
}