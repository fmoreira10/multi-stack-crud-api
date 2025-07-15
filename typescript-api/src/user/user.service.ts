import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }
}
    findOne(id: number) {
        return this.prisma.user.findUnique({
        where: { id },
        });
    }
    
    async update(id: number, data: Partial<CreateUserDto>) {
        if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.user.update({
        where: { id },
        data,
        });
    }
    
    remove(id: number) {
        return this.prisma.user.delete({
        where: { id },
        });
    }
    }   
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';  
import { UserResponseDto } from './dto/user-response.dto';  
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';       
import * as bcrypt from 'bcryptjs'; 
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<UserResponseDto> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });
    return new UserResponseDto(user);
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany();
    return users.map(user => new UserResponseDto(user));
  }
}