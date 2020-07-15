import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskService } from './services/tasks.service';
import { TaskController } from './controllers/tasks.controller';
import { TaskRepository } from './repositories/task.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository]), AuthModule],
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule {}
