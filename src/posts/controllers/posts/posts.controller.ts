import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dtos/CreatePosts.dto';
import { UpdatePostDto } from 'src/posts/dtos/UpdatePosts.dto';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('posts')
export default class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}
 
  @Get()
  getAllPosts() {
    return this.postsService.getPosts();
  }
 
  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postsService.findPostsById(Number(id));
  }
 
  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPosts(post);
  }
 
  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.replacePost(Number(id), post);
  }
 
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postsService.deletePost(Number(id));
  }
}


