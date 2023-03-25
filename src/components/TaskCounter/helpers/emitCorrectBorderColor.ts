import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../CreateTaskForm/enums';

export default function emitCorrectBorderColor(
  status: TaskCounterStatusType,
): string {
  const DEFAULT_BORDER_COLOR = 'error.light';
  const BORDER_COLOR_STATUS_BASED = {
    [Status.todo]: 'error.light',
    [Status.inProgress]: 'warning.light',
    [Status.completed]: 'success.light',
  };

  return (
    BORDER_COLOR_STATUS_BASED[status] ||
    DEFAULT_BORDER_COLOR
  );
}
