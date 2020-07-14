import {
  Put,
  Get,
  Body,
  Post,
  Param,
  Delete,
  Controller
} from '@nestjs/common';

import { ITask } from '../models/task.model';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TaskService } from '../services/tasks.service';
import { UpdateTaskDto } from '../dtos/update-task.dto';

@Controller('v1/tasks')
export class TaskController {
  constructor(private readonly _service: TaskService) {}

  @Get()
  public getAllTasks(): ITask[] {
    return this._service.getAllTasks();
  }

  @Get(':id')
  public getTaskById(@Param('id') id: string): ITask {
    return this._service.getTaskById(id);
  }

  @Post()
  createTask(@Body() data: CreateTaskDto): ITask {
    return this._service.createTask(data);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() data: UpdateTaskDto): ITask {
    return this._service.updateTask(id, data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    return this._service.deleteTask(id);
  }
}
