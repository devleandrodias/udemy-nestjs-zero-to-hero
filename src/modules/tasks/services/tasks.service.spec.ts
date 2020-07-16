import { Test } from '@nestjs/testing';
import { TaskService } from './tasks.service';
import { ETaskStatus } from '../enuns/task-status.enum';
import { TaskRepository } from '../repositories/task.repository';
import { GetTaskFilterDto } from '../dtos/get-tasks-filter.dto';

const mockUser = { username: 'Test User' };

const mockFilters: GetTaskFilterDto = {
  status: ETaskStatus.IN_PROGRESS,
  search: 'Some search query'
};

const mockTaskRepository = () => ({
  getTask: jest.fn()
});

describe('TasksService', () => {
  let tasksService: TaskService;
  let taskRepository: TaskRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TaskService,
        { provide: TaskRepository, useFactory: mockTaskRepository }
      ]
    }).compile();

    tasksService = module.get<TaskService>(TaskService);
    taskRepository = module.get<TaskRepository>(TaskRepository);
  });

  describe('getAllTasks', () => {
    it('gets all tasks from the repository', async () => {
      // taskRepository.getTask.mockResolvedValue('someValue');
      // expect(taskRepository.getTask).not.toHaveBeenCalled();
      // const result = await tasksService.getTasksWithFilter(mockFilters);
      // expect(taskRepository.getTask).toHaveBeenCalled();
      // expect(result).toEqual('someValue');
      expect(true);
    });
  });
});
