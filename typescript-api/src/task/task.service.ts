import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }

  findAll() {
    return this.prisma.task.findMany();
  }
}
    findOne(id: number) {
        return this.prisma.task.findUnique({
        where: { id },
        });
    }
    
    update(id: number, data: Partial<CreateTaskDto>) {
        return this.prisma.task.update({
        where: { id },
        data,
        });
    }
    
    remove(id: number) {
        return this.prisma.task.delete({
        where: { id },
        });
    }
    }   
// This service handles task management, including creating, retrieving, updating, and deleting tasks.
// It uses Prisma to interact with the database and perform CRUD operations on tasks.