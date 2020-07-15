import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ETaskStatus } from '../enuns/task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  private readonly allowedStatus = [
    ETaskStatus.OPEN,
    ETaskStatus.IN_PROGRESS,
    ETaskStatus.DONE
  ];

  private isStatusValid(status: any) {
    const idx = this.allowedStatus.indexOf(status);
    return idx !== -1;
  }

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value))
      throw new BadRequestException(`${value} is an invalid status`);

    return value;
  }
}
