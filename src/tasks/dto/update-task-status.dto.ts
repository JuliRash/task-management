import { IsEnum } from 'class-validator';
import { taskStatus } from '../task.model';

export class UpdateTaskStatusDto {
  @IsEnum(taskStatus)
  status: taskStatus;
}
