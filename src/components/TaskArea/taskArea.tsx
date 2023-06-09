import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import {
  Alert,
  Box,
  Grid,
  LinearProgress,
} from '@mui/material';
import { format } from 'date-fns';
import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';

import { sendApiRequest } from '@helpers/sendApiRequest';
import { ITaskApi } from './interfaces';
import { TaskCounter } from '../TaskCounter';
import Task from '../Task/task';
import { Priority, Status } from '../CreateTaskForm/enums';
import { IUpdateTask } from '../CreateTaskForm/interfaces';
import { countTasks } from '@helpers/countTasks';
import { TaskStatusChangedContext } from '@context/TaskStatusChangedContext';

const TaskArea: FC = (): ReactElement => {
  const taskUpdatedContext = useContext(
    TaskStatusChangedContext,
  );

  const baseUrl = import.meta.env.VITE_API_URL;

  const { error, isLoading, data, refetch } = useQuery(
    ['tasks'],
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        `${baseUrl}/tasks`,
        'GET',
      );
    },
  );

  const updateTaskMutation = useMutation(
    (data: IUpdateTask) =>
      sendApiRequest(`${baseUrl}/tasks`, 'PUT', data),
  );

  useEffect(() => {
    refetch();
  }, [taskUpdatedContext.updated]);

  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      taskUpdatedContext.toggle();
    }
  }, [updateTaskMutation.isSuccess]);

  function onStatusChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: event.target.checked
        ? Status.inProgress
        : Status.todo,
    });
  }

  function markCompletedHandler(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of your Tasks as on{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>

      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter
            count={
              data
                ? countTasks(data, Status.todo)
                : undefined
            }
            status={Status.todo}
          />

          <TaskCounter
            count={
              data
                ? countTasks(data, Status.inProgress)
                : undefined
            }
            status={Status.inProgress}
          />

          <TaskCounter
            count={
              data
                ? countTasks(data, Status.completed)
                : undefined
            }
            status={Status.completed}
          />
        </Grid>

        {/*@ts-ignore*/}
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          {error && (
            <Alert severity="error">
              There was an error fetching your tasks.
            </Alert>
          )}

          {!error &&
            Array.isArray(data) &&
            data.length === 0 && (
              <Alert severity="warning">
                You have no tasks yet. Start by creating
                one.
              </Alert>
            )}

          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data.map((task) => {
              return task.status === Status.todo ||
                task.status === Status.inProgress ? (
                <Task
                  id={task.id}
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  date={new Date(task.date)}
                  status={task.status as Status}
                  priority={task.priority as Priority}
                  onStatusChange={onStatusChangeHandler}
                  onClick={markCompletedHandler}
                />
              ) : null;
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
