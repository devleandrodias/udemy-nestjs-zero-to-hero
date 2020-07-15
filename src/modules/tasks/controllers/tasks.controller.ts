import {
  Get,
  Body,
  Post,
  Param,
  Query,
  Patch,
  Delete,
  UsePipes,
  UseGuards,
  Controller,
  ParseIntPipe,
  ValidationPipe
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TaskService } from '../services/tasks.service';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { GetTaskFilterDto } from '../dtos/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from '../pipes/task-status-validation.pipe';

@Controller('v1/tasks')
@UseGuards(AuthGuard())
export class TaskController {
  constructor(private readonly _service: TaskService) {}

  @Get()
  async getTasks(
    @Query(ValidationPipe) filterDto: GetTaskFilterDto
  ): Promise<Task[]> {
    if (Object.keys(filterDto).length) {
      return await this._service.getTasksWithFilter(filterDto);
    } else {
      return await this._service.getAllTasks();
    }
  }

  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return await this._service.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createTask(@Body() data: CreateTaskDto): Promise<Task> {
    return await this._service.createTask(data);
  }

  @Patch(':id')
  async updateStatusTask(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) { status }: UpdateTaskDto
  ): Promise<Task> {
    return await this._service.updateStatusTask(id, status);
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this._service.deleteTask(id);
  }
}
