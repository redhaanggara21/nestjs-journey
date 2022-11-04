import { Injectable, Inject} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from 'src/comments/dtos/CreateComment.dto';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class CommentsService {

  @Inject(ConfigService)
  public config: ConfigService;

  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  createComments(createCommentDto: CreateCommentDto) {
    const newUser = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(newUser);
  }

  getComments() {
    return this.commentRepository.find();
  }

  findCommentsById(id: any) {
    return this.commentRepository.findOne(id);
  }
}