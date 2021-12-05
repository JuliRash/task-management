import { taskStatus } from '../task.model';

export class GetTasksFilterDto {
  status?: taskStatus;
  search?: string;
}
