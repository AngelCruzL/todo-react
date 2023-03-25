import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import propTypes from 'prop-types';

import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../CreateTaskForm/enums';
import {
  emitCorrectBorderColor,
  emitCorrectLabel,
} from './helpers';

const TaskCounter: FC<ITaskCounter> = ({
  status = Status.todo,
  count = 0,
}): ReactElement => {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Avatar
          sx={{
            marginBlockEnd: '1rem',
            blockSize: '6rem',
            inlineSize: '6rem',
            border: '5px solid',
            borderColor: `${emitCorrectBorderColor(
              status,
            )}`,
            backgroundColor: 'transparent',
          }}
        >
          <Typography color="#fff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#fff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  count: propTypes.number,
  status: propTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
};

export default TaskCounter;
