import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

import _TaskHeader from './_taskHeader';
import _taskDescription from './_taskDescription';

const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={2}
      p={4}
      sx={{
        inlineSize: '100%',
        border: '1px solid',
        borderRadius: '.5rem',
        borderColor: 'error.light',
      }}
    >
      <_TaskHeader />
      <_taskDescription />
    </Box>
  );
};

export default Task;
