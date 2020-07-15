import { Repository, EntityRepository } from 'typeorm';

import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { ETaskStatus } from '../enuns/task-status.enum';
import { GetTaskFilterDto } from '../dtos/get-tasks-filter.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTask(filterDto: GetTaskFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        'task.title LIKE :search OR task.description LIKE :search',
        { search: `%${search}%` }
      );
    }

    const tasks = await query.getMany();

    return tasks;
  }
  async createTask(data: CreateTaskDto): Promise<Task> {
    const { title, description } = data;

    const task = new Task();

    task.title = title;
    task.description = description;
    task.status = ETaskStatus.OPEN;

    await task.save();

    return task;
  }
}
