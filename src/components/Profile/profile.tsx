import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          marginBlockEnd: '1rem',
          blockSize: '6rem',
          inlineSize: '6rem',
          backgroundColor: 'primary.main',
        }}
      >
        <Typography variant="h4" color="text.primary">
          Á
        </Typography>
      </Avatar>

      <Typography variant="h6" color="text.primary">
        Welcome Ángel Cruz
      </Typography>

      <Typography variant="body1" color={'text.primary'}>
        This is your personal task manager
      </Typography>
    </Box>
  );
};

export default Profile;
