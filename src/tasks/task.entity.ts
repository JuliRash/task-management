import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { taskStatus } from './task.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: taskStatus;
}
