import {
  Priority,
  Status,
} from '../../CreateTaskForm/enums';

export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
