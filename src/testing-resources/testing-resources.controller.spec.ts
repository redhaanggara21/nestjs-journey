import { Test, TestingModule } from '@nestjs/testing';
import { TestingResourcesController } from './testing-resources.controller';
import { TestingResourcesService } from './testing-resources.service';

describe('TestingResourcesController', () => {
  let controller: TestingResourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestingResourcesController],
      providers: [TestingResourcesService],
    }).compile();

    controller = module.get<TestingResourcesController>(TestingResourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
