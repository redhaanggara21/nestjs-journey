import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  Post, 
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dtos/CreatePosts.dto';
import { UpdatePostDto } from 'src/posts/dtos/UpdatePosts.dto';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postService: PostsService
  ) {}
 
  @Get()
  getAllPosts() {
    return this.postService.getPosts();
  }
 
  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.findPostsById(Number(id));
  }
  
  @Post('create')
  @UsePipes(ValidationPipe)
  async createPost(@Body() post: CreatePostDto) {
    return this.postService.createPosts(post);
  }
 
  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postService.replacePost(Number(id), post);
  }
 
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postService.deletePost(Number(id));
  }
}


