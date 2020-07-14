import { ETaskStatus } from '../enuns/task-status.enum';
export interface ITask {
    id: string;
    title: string;
    description: string;
    status: ETaskStatus;
}
