import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: '60m' } })],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
// This module defines the AuthModule in a NestJS application.
// It imports the necessary components such as AuthService and AuthController.  