import { FC, ReactElement } from 'react';
import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';

import { sendApiRequest } from '@helpers/sendApiRequest';
import { ITaskApi } from './interfaces';
import { TaskCounter } from '../TaskCounter';
import Task from '../Task/task';

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

        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
