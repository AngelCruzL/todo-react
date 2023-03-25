import { ITaskFooter } from './ITaskFooter';
import { ITaskDescription } from './ITaskDescription';
import { ITaskHeader } from './ITaskHeader';
import {
  Priority,
  Status,
} from '../../CreateTaskForm/enums';

export interface ITask
  extends ITaskHeader,
    ITaskDescription,
    ITaskFooter {
  id?: string;
  priority?: Priority;
  status?: Status;
}
