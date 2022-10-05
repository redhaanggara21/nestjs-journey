import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from 'src/comments/dtos/CreateComment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  createCustomers(createCommentDto: CreateCommentDto) {
    const newUser = this.customerRepository.create(createCommentDto);
    return this.customerRepository.save(newUser);
  }

  getCustomers() {
    return this.customerRepository.find();
  }

  findCustomersById(id: any) {
    return this.customerRepository.findOne(id);
  }
}