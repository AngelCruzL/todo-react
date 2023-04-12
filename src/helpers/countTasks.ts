import { ITaskApi } from '../components/TaskArea/interfaces';
import { TaskCounterStatusType } from '../components/TaskCounter/interfaces/ITaskCounter';

export function countTasks(
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number {
  if (!Array.isArray(tasks)) return 0;

  const totalTasks = tasks.filter(
    (task) => task.status === status,
  );

  return totalTasks.length;
}
