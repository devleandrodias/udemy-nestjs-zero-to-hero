import { ITask } from '../models/task.model';
export declare class TaskService {
    private tasks;
    getAllTasks: () => ITask[];
    createTask(title: string, description: string): ITask;
}
