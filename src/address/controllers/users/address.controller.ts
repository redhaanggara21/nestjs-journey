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
  
    @Get('all')
    @ApiOkResponse({ status: 200, type: Address, isArray: true })
    getAddress(): Promise<Address[]>{
      return this.addressService.getAddress();
    }
  
    @Get(':id')
    findAddressById(@Param('id', ParseIntPipe) id: string) {
      console.log(id)
      return this.addressService.findAddressById(id);
    }

    @Put(':id')
    @ApiOkResponse({ status: 200, type: Address })
    updateAddressById(@Param('id', ParseIntPipe) id: number, @Body() updateAddress: UpdateAddressDto) {
      return this.addressService.updateAddressById(id, updateAddress);
    }

    // https://deryfebriantara.github.io/nestjs-easy-crud/
    // @Patch(':id')
    // updateAddressById(@Param('id', ParseIntPipe) id: number, @Body() updateAddress: UpdateAddressDto) {
    //   return this.addressService.updateAddressById(id, updateAddress);
    // }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    @ApiOkResponse({ status: 200, type: Address })
    createaddress(@Body() createAddressDTO: CreateAddressDto) {
      return this.addressService.createAddress(createAddressDTO);
    }

    @Delete(':id')
    @ApiOkResponse({ status: 200, type: Address })
    remove(@Param('id') id: string) {
      return this.addressService.deleteAddressById(+id);
    }
  }