import { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskFooter } from './interfaces/ITaskFooter';
import { Status } from '../CreateTaskForm/enums';

const _TaskFooter: FC<ITaskFooter> = ({
  id,
  status = Status.todo,
  onClick = console.log,
  onStatusChange = console.log,
}): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        control={
          <Switch
            color="warning"
            onChange={onStatusChange}
          />
        }
        label="In Progress"
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
        onClick={onClick}
      >
        Mark as Complete
      </Button>
    </Box>
  );
};

_TaskFooter.propTypes = {
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
};

export default _TaskFooter;
