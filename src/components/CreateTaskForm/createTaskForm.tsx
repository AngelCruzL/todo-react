import {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';

import { sendApiRequest } from '@helpers/sendApiRequest';
import { ICreateTask } from '../TaskArea/interfaces';

import _TaskTitleField from './_taskTitleField';
import _TaskDescriptionField from './_taskDescriptionField';
import _TaskDateField from './_taskDateField';
import _TaskSelectField from './_taskSelectField';
import { Priority, Status } from './enums';
import { TaskStatusChangedContext } from '@context/TaskStatusChangedContext';

const baseUrl = import.meta.env.VITE_API_URL;

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] =
    useState<string>('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(
    Priority.normal,
  );
  const [showSuccessAlert, setShowSuccessAlert] =
    useState<boolean>(false);

  const taskUpdatedContext = useContext(
    TaskStatusChangedContext,
  );

  const createTaskMutation = useMutation(
    (data: ICreateTask) =>
      sendApiRequest(`${baseUrl}/tasks`, 'POST', data),
  );

  function createTaskHandler() {
    if (!title || !description) return;

    const newTask: ICreateTask = {
      title,
      description,
      date: date!.toISOString(),
      status,
      priority,
    };

    createTaskMutation.mutate(newTask);
  }

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccessAlert(true);
      taskUpdatedContext.toggle();
    }

    const successAlertTimeout = setTimeout(() => {
      setShowSuccessAlert(false);
    }, 7000);

    return () => clearTimeout(successAlertTimeout);
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccessAlert && (
        <Alert
          severity="success"
          sx={{
            inlineSize: '100%',
            marginBlockEnd: '1rem',
            color: 'white',
          }}
        >
          <AlertTitle>Success</AlertTitle>
          The task was created successfully
        </Alert>
      )}

      <Typography mb={2} variant="h6" component="h2">
        Create A Task
      </Typography>

      <Stack spacing={2} width="100%">
        <_TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <_TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <_TaskDateField
          value={date}
          onChange={(date) => setDate(date)}
          disabled={createTaskMutation.isLoading}
        />

        <Stack
          direction="row"
          spacing={2}
          sx={{ inlineSize: '100%' }}
        >
          <_TaskSelectField
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled={createTaskMutation.isLoading}
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
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            disabled={createTaskMutation.isLoading}
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

        {createTaskMutation.isLoading && <LinearProgress />}

        <Button
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
          disabled={
            !title ||
            !description ||
            createTaskMutation.isLoading
          }
        >
          Create Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
