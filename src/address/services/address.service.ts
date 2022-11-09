import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Address } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from '../dtos/CreateAddress.dto';
import { UpdateAddressDto } from '../dtos/UpdateAddress.dto';

@Injectable()
export class AddressService {
  // constructor(
  //   @InjectRepository(Address) 
  //   private addressRepository: Repository<Address>,
  // ) {
  // }

  @InjectRepository(Address)
  private readonly repository: Repository<Address>;

  constructor(){}

  async create(createAddressDto: CreateAddressDto): Promise<Address>  {
    return this.repository.save(
      this.repository.create(createAddressDto)
    );
  }

  async findAll(): Promise<Address[]> {
    return await this.repository.find();
  }

  async update(id: string, data: any): Promise<any> {
    return await this.repository.update(id, data);
  }

  async findById(id: any): Promise<Address>{
    console.log(id);
    return await this.repository.findOne(id);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
  
}