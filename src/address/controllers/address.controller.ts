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
  export class AddressController{
    constructor(
      private addressService: AddressService
    ) {}

    @Get()
    async getAddress(): Promise<Address[]>{
      const datas: Array<Address>  = await this.addressService.findAll();
      return datas
    }

    @Get(':id')
    async getAddressbyId(@Param('id', ParseIntPipe) id: number): Promise<Address>{
      return await this.addressService.findById(+id);
    }

    @Post()
    async create(@Body() address: CreateAddressDto): Promise<Address> {
      return this.addressService.create(address);
    }
    
    @Put(':id')
    updateAddressById(@Param('id') id: string, @Body() address: any): Promise<any> {
      return this.addressService.update(id, address);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any>  {
      await this.addressService.delete(+id);
      return "deleted"
    }
  }