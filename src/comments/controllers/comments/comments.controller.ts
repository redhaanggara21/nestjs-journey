import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { CreateCommentDto } from 'src/comments/dtos/CreateComment.dto';
  import { CommentsService } from 'src/comments/services/comments/comments.service';
  
  @Controller('comments')
  export class CommentsController {
    constructor(private readonly commentService: CommentsService) {}


    @Get()
    getComments() {
      return this.commentService.getComments();
    }
  
    @Get(':id')
    findCommentsById(@Param('id', ParseIntPipe) id: string) {
      console.log(id);
      return this.commentService.findCommentsById(+id);
    }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    createComments(@Body() createCommentDto: CreateCommentDto) {
      console.log(createCommentDto);
      return this.commentService.createComments(createCommentDto);
    }
  }