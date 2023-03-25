import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const TaskCounter: FC = (): ReactElement => {
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
            borderColor: 'warning.light',
            backgroundColor: 'transparent',
          }}
        >
          <Typography color="#fff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#fff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          Subtitle
        </Typography>
      </Box>
    </>
  );
};

export default TaskCounter;
