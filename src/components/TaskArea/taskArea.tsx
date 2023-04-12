import { FC, ReactElement } from 'react';
import {
  Alert,
  Box,
  Grid,
  LinearProgress,
} from '@mui/material';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';

import { sendApiRequest } from '@helpers/sendApiRequest';
import { ITaskApi } from './interfaces';
import { TaskCounter } from '../TaskCounter';
import Task from '../Task/task';
import { Priority, Status } from '../CreateTaskForm/enums';

const TaskArea: FC = (): ReactElement => {
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
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
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
