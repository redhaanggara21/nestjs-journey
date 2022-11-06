import { Injectable, Inject} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from 'src/posts/dtos/CreatePosts.dto';
import { UpdatePostDto } from 'src/posts/dtos/UpdatePosts.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostsService {

  @Inject(ConfigService)
  public config: ConfigService;

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  createPosts(createPostDto: CreatePostDto) {
    const newUser = this.postRepository.create(createPostDto);
    return this.postRepository.save(newUser);
  }

  getPosts() {
    return this.postRepository.find();
  }

  findPostsById(id: any) {
    return this.postRepository.findOne(id);
  }

  deletePost(id: any) {
    return this.postRepository.delete(id);
  }

  replacePost(id: any, post) {
    return this.postRepository.delete(id);
  }
  
}