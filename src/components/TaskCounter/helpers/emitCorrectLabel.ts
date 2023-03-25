import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../CreateTaskForm/enums';

export default function emitCorrectLabel(
  status: TaskCounterStatusType,
): string {
  const DEFAULT_LABEL = '';
  const LABEL_STATUS_BASED = {
    [Status.todo]: Status.todo,
    [Status.inProgress]: Status.inProgress,
    [Status.completed]: Status.completed,
  };

  return LABEL_STATUS_BASED[status] || DEFAULT_LABEL;
}
