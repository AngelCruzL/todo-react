import { ITaskFooter } from './ITaskFooter';
import { ITaskDescription } from './ITaskDescription';
import { ITaskHeader } from './ITaskHeader';
import { Priority } from '../../CreateTaskForm/enums';

export interface ITask
  extends ITaskHeader,
    ITaskDescription,
    ITaskFooter {
  priority?: Priority;
}
