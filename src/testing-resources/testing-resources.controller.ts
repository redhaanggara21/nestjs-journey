import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestingResourcesService } from './testing-resources.service';
import { CreateTestingResourceDto } from './dto/create-testing-resource.dto';
import { UpdateTestingResourceDto } from './dto/update-testing-resource.dto';

@Controller('testing-resources')
export class TestingResourcesController {
  constructor(private readonly testingResourcesService: TestingResourcesService) {}

  @Post()
  create(@Body() createTestingResourceDto: CreateTestingResourceDto) {
    return this.testingResourcesService.create(createTestingResourceDto);
  }

  @Get()
  findAll() {
    return this.testingResourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testingResourcesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestingResourceDto: UpdateTestingResourceDto) {
    return this.testingResourcesService.update(+id, updateTestingResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testingResourcesService.remove(+id);
  }
}
