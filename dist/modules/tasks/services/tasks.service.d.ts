import { ITask } from '../models/task.model';
import { CreateTaskDto } from '../dtos/create-task.dto';
export declare class TaskService {
    private tasks;
    getAllTasks: () => ITask[];
    createTask(data: CreateTaskDto): ITask;
}
