import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>,
  ) {}

  // async getByEmail(email: string) {
  //   const user = await this.userRepository.findOne({ email });
  //   if (user) {
  //     return user;
  //   }
  //   throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  // }
 
  // async create(userData: CreateUserDto) {
  //   const newUser = await this.userRepository.create(userData);
  //   await this.userRepository.save(newUser);
  //   return newUser;
  // }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

  getUsers() {
    return this.userRepository.find();
  }

  findUsersById(id: any) {
    return this.userRepository.findOne(id);
  }
}