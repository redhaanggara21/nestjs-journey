import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Delete,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { CreateAddressDto } from 'src/address/dtos/CreateAddress.dto';
  import { UpdateAddressDto } from 'src/address/dtos/UpdateAddress.dto';
  import { Address } from 'src/address/dtos/address.dto';
  import { AddressService } from 'src/address/services/address.service';
  import { ApiOkResponse } from '@nestjs/swagger';

  @Controller('address')
  export class AddressController {
    constructor(
      private readonly addressService: AddressService
    ) {}
  
    @Get()
    // @ApiOkResponse({ status: 200, type: Address, isArray: true })
    getAddress(){
      return this.addressService.getAddress();
    }
  
    @Get(':id')
    getAddressbyId(@Param('id') id: string) {
      console.log(id)
      return this.addressService.findAddressById(Number(id));
    }

    // https://deryfebriantara.github.io/nestjs-easy-crud/
    // @Patch(':id')
    // updateAddressById(@Param('id', ParseIntPipe) id: number, @Body() updateAddress: UpdateAddressDto) {
    //   return this.addressService.updateAddressById(id, updateAddress);
    // }
  
    @Post()
    // @UsePipes(ValidationPipe)
    // @ApiOkResponse({ status: 200, type: Address })
    async createAddress(@Body() address: CreateAddressDto) {
      return this.addressService.createAddress(address);
    }

    @Put(':id')
    // @ApiOkResponse({ status: 200, type: Address })
    updateAddressById(@Param('id') id: string, @Body() address: UpdateAddressDto) {
      return this.addressService.updateAddressById(Number(id), address);
    }

    @Delete(':id')
    // @ApiOkResponse({ status: 200, type: Address })
    async deleteAddres(@Param('id') id: string) {
      return this.addressService.deleteAddressById(+id);
    }
  }