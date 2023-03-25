import { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskDescription } from './interfaces';

const _TaskDescription: FC<ITaskDescription> = ({
  description = 'Lorem ipsum dolor sit amet consectetur',
}): ReactElement => {
  return (
    <Box>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

_TaskDescription.propTypes = {
  description: PropTypes.string,
};

export default _TaskDescription;
