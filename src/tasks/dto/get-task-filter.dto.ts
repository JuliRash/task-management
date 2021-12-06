import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { taskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(taskStatus)
  status?: taskStatus;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  search?: string;
}
