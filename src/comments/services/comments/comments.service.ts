import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from 'src/comments/dtos/CreateComment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  createCustomers(createCommentDto: CreateCommentDto) {
    const newUser = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(newUser);
  }

  getCustomers() {
    return this.commentRepository.find();
  }

  findCustomersById(id: any) {
    return this.commentRepository.findOne(id);
  }
}