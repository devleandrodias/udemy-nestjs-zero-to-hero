import { Module } from '@nestjs/common';
import { TaskService } from './services/tasks.service';
import { TaskController } from './controllers/tasks.controller';

@Module({
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule {}
