import { PartialType } from '@nestjs/swagger';
import { CreateTestingResourceDto } from './create-testing-resource.dto';

export class UpdateTestingResourceDto extends PartialType(CreateTestingResourceDto) {}
