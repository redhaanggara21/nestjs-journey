import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from '../dtos/CreateAddress.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) private readonly addressRepository: Repository<Address>,
  ) {}

  createAddress(createAddressDto: CreateAddressDto) {
    const newAddress = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(newAddress);
  }

  getAddress() {
    return this.addressRepository.find();
  }

  findAddressById(id: any) {
    return this.addressRepository.findOne(id);
  }

  deleteAddressById(id: any){
    return this.addressRepository.delete(id);
  }

  updateAddressById(id: any, data) {
    return this.addressRepository.update(id, data);
  }
  
}