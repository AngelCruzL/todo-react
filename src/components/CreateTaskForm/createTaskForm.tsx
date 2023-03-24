import { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import _TaskTitleField from './_taskTitleField';
import _TaskDescriptionField from './_taskDescriptionField';
import _TaskDateField from './_taskDateField';
import _TaskSelectField from './_taskSelectField';
import { Priority, Status } from './enums';

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

        <Stack
          direction="row"
          spacing={2}
          sx={{ inlineSize: '100%' }}
        >
          <_TaskSelectField
            label="Status"
            name="status"
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />

          <_TaskSelectField
            label="Priority"
            name="priority"
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
