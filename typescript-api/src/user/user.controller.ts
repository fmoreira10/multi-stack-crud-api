import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
import { UserResponseDto } from './dto/user-response.dto';
import { UserService } from './user.service';   
import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    return this.userService.findAll();
  }
}   
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';  
import { UserResponseDto } from './dto/user-response.dto';
import { Injectable } from '@nestjs/common';    