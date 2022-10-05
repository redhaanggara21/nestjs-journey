import { Module } from '@nestjs/common';
import { Customer } from 'src/typeorm';
import { CommentsController } from './controllers/comments/comments.controller';
import { CommentsService } from './services/comments/comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}