import { Module } from '@nestjs/common';
import { AddressController } from './controllers/users/address.controller';
import { AddressService } from './services/address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}