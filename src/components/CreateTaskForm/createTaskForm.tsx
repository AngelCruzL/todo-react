import { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import _TaskTitleField from './_taskTitleField';
import _TaskDescriptionField from './_taskDescriptionField';
import _TaskDateField from './_taskDateField';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} variant="h6" component="h2">
        Create A Task
      </Typography>

      <Stack spacing={2} width="100%">
        <_TaskTitleField />
        <_TaskDescriptionField />
        <_TaskDateField />
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
