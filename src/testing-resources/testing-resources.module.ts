import { Module } from '@nestjs/common';
import { TestingResourcesService } from './testing-resources.service';
import { TestingResourcesController } from './testing-resources.controller';

@Module({
  controllers: [TestingResourcesController],
  providers: [TestingResourcesService]
})
export class TestingResourcesModule {}
