import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from '../services/tasks.service';
import { ITask } from '../models/task.model';

@Controller('v1/tasks')
export class TaskController {
  constructor(private readonly _service: TaskService) {}

  @Get()
  public getAllTasks(): ITask[] {
    return this._service.getAllTasks();
  }

  @Post()
  createTask(@Body() { title, description }: ITask): ITask {
    return this._service.createTask(title, description);
  }
}
