import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

import _TaskHeader from './_taskHeader';
import _TaskDescription from './_taskDescription';
import _TaskFooter from './_taskFooter';

const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={4}
      p={3}
      sx={{
        inlineSize: '100%',
        border: '1px solid',
        borderRadius: '.5rem',
        borderColor: 'error.light',
      }}
    >
      <_TaskHeader />
      <_TaskDescription />
      <_TaskFooter />
    </Box>
  );
};

export default Task;
