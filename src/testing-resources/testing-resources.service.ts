import { Injectable } from '@nestjs/common';
import { CreateTestingResourceDto } from './dto/create-testing-resource.dto';
import { UpdateTestingResourceDto } from './dto/update-testing-resource.dto';

@Injectable()
export class TestingResourcesService {
  create(createTestingResourceDto: CreateTestingResourceDto) {
    return 'This action adds a new testingResource';
  }

  findAll() {
    return `This action returns all testingResources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testingResource`;
  }

  update(id: number, updateTestingResourceDto: UpdateTestingResourceDto) {
    return `This action updates a #${id} testingResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} testingResource`;
  }
}
