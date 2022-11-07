import { Test, TestingModule } from '@nestjs/testing';
import { TestingResourcesService } from './testing-resources.service';

describe('TestingResourcesService', () => {
  let service: TestingResourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestingResourcesService],
    }).compile();

    service = module.get<TestingResourcesService>(TestingResourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
