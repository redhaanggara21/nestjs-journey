import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { CreateAddressDto } from 'src/address/dtos/CreateAddress.dto';
  import { AddressService } from 'src/address/services/address.service';
  
  @Controller('address')
  export class AddressController {
    constructor(
      private readonly addressService: AddressService
    ) {}
  
    @Get()
    getAddress() {
      return this.addressService.getAddress();
    }
  
    @Get(':id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
      return this.addressService.findAddressById(id);
    }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createAddressDTO: CreateAddressDto) {
      return this.addressService.createAddress(createAddressDTO);
    }
  }