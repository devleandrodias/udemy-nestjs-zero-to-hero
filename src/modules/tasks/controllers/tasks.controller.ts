import {
  Get,
  Body,
  Post,
  Param,
  Query,
  Patch,
  Delete,
  UsePipes,
  Controller,
  ValidationPipe
} from '@nestjs/common';

import { ITask } from '../models/task.model';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TaskService } from '../services/tasks.service';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { GetTaskFilterDto } from '../dtos/get-tasks-filter.dto';

@Controller('v1/tasks')
export class TaskController {
  constructor(private readonly _service: TaskService) {}

  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto): ITask[] {
    if (Object.keys(filterDto).length) {
      return this._service.getTasksWithFilter(filterDto);
    } else {
      return this._service.getAllTasks();
    }
  }

  @Get()
  getAllTasks(): ITask[] {
    return this._service.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): ITask {
    return this._service.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() data: CreateTaskDto): ITask {
    return this._service.createTask(data);
  }

  @Patch(':id')
  updateStatusTask(
    @Param('id') id: string,
    @Body() data: UpdateTaskDto
  ): ITask {
    return this._service.updateStatusTask(id, data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    return this._service.deleteTask(id);
  }
}
