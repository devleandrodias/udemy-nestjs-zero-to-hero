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
  ParseIntPipe,
  ValidationPipe
} from '@nestjs/common';

import { CreateTaskDto } from '../dtos/create-task.dto';
import { TaskService } from '../services/tasks.service';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { GetTaskFilterDto } from '../dtos/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from '../pipes/task-status-validation.pipe';
import { Task } from '../entities/task.entity';

@Controller('v1/tasks')
export class TaskController {
  constructor(private readonly _service: TaskService) {}

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): ITask[] {
  //   if (Object.keys(filterDto).length) {
  //     return this._service.getTasksWithFilter(filterDto);
  //   } else {
  //     return this._service.getAllTasks();
  //   }
  // }

  // @Get()
  // getAllTasks(): ITask[] {
  //   return this._service.getAllTasks();
  // }

  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return await this._service.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() data: CreateTaskDto): Promise<Task> {
    return this._service.createTask(data);
  }

  // @Patch(':id')
  // updateStatusTask(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) { status }: UpdateTaskDto
  // ): ITask {
  //   return this._service.updateStatusTask(id, status);
  // }

  // @Delete(':id')
  // deleteTask(@Param('id') id: string): void {
  //   return this._service.deleteTask(id);
  // }
}
