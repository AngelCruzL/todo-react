import { Priority } from '../../CreateTaskForm/enums';

export function renderPriorityBorderColor(
  priority: Priority,
): string {
  const DEFAULT_BORDER_COLOR = 'grey.900';
  const BORDER_COLOR_MAP = {
    [Priority.low]: 'grey.900',
    [Priority.normal]: 'info.light',
    [Priority.high]: 'error.light',
  };

  return BORDER_COLOR_MAP[priority] || DEFAULT_BORDER_COLOR;
}
