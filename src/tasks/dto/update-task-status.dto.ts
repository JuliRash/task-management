import { IsEnum } from 'class-validator';
import { taskStatus } from '../task-status.enum';

export class UpdateTaskStatusDto {
  @IsEnum(taskStatus)
  status: taskStatus;
}
