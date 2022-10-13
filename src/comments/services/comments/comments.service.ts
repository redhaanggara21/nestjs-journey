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

  // public getEnv(): string {
  //   const databaseName: string = this.config.get('ENV_NAME');
  //   console.log({ databaseName });
  //   return databaseName;
  // }

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