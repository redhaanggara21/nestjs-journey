import {
    IsNotEmpty
} from "class-validator";

export class CreateAddressDto {

    // https://github.com/rskhan167/movie-review/blob/main/src/user/entities/user.entity.ts
    @IsNotEmpty()
    street: string;
   
    @IsNotEmpty()
    city: string;
   
    @IsNotEmpty()
    country: string;
}