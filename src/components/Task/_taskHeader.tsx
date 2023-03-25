import { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import { ITaskHeader } from './interfaces';

const _TaskHeader: FC<ITaskHeader> = ({
  title = 'Test Title',
  date = new Date(),
}): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      mb={4}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>

      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};

_TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

export default _TaskHeader;
