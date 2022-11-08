import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from '../dtos/CreateAddress.dto';
import { UpdateAddressDto } from '../dtos/UpdateAddress.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) 
    private  addressRepository: Repository<Address>,
  ) {}

  createAddress(createAddressDto: CreateAddressDto) {
    const newAddress = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(newAddress);
  }

  getAddress(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  findAddressById(id: number): Promise<Address> {
    console.log(id);
    return this.addressRepository.findOneBy({ id });
  }

  deleteAddressById(id: number) {
    return this.addressRepository.delete(id);
  }

  updateAddressById(id: number, data: UpdateAddressDto) {
    return this.addressRepository.update(id, data);
  }
  
}