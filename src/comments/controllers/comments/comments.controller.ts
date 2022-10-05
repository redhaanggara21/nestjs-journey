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
    getCustomers() {
      return this.commentService.getCustomers();
    }
  
    @Get('id/:id')
    findCustomersById(@Param('id', ParseIntPipe) id: number) {
      return this.commentService.findCustomersById(id);
    }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomers(@Body() createCommentDto: CreateCommentDto) {
      return this.commentService.createCustomers(createCommentDto);
    }
  }