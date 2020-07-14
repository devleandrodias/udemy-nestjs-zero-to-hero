import { Controller, Get, Post, Body } from '@nestjs/common';

import { ITask } from '../models/task.model';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TaskService } from '../services/tasks.service';

@Controller('v1/tasks')
export class TaskController {
  constructor(private readonly _service: TaskService) {}

  @Get()
  public getAllTasks(): ITask[] {
    return this._service.getAllTasks();
  }

  @Post()
  createTask(@Body() data: CreateTaskDto): ITask {
    return this._service.createTask(data);
  }
}
