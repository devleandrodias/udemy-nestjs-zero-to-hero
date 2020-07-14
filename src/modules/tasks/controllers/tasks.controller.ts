import { Controller, Get } from '@nestjs/common';
import { TaskService } from '../services/tasks.service';
import { ITask } from '../models/task.model';

@Controller('task')
export class TaskController {
  constructor(private readonly _service: TaskService) {}

  @Get()
  public getAllTasks(): ITask[] {
    return this._service.getAllTasks();
  }
}
