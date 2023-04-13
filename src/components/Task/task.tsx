import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import _TaskHeader from './_taskHeader';
import _TaskDescription from './_taskDescription';
import _TaskFooter from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Priority, Status } from '../CreateTaskForm/enums';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

const Task: FC<ITask> = ({
  id,
  title = 'Test Title',
  description = 'Lorem ipsum dolor sit amet consectetur',
  date = new Date(),
  onClick = console.log,
  onStatusChange = console.log,
  status = Status.todo,
  priority = Priority.normal,
}): ReactElement => {
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
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <_TaskHeader title={title} date={date} />
      <_TaskDescription description={description} />
      <_TaskFooter
        id={id}
        status={status}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
  priority: PropTypes.oneOf([
    Priority.low,
    Priority.normal,
    Priority.high,
  ]),
};

export default Task;
