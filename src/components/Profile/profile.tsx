import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

type Profile = {
  name: string;
};

const Profile: FC<Profile> = ({ name }): ReactElement => {
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
        <Typography
          variant="h4"
          color="text.primary"
          data-testid="avatar"
        >
          {name[0].toUpperCase()}
        </Typography>
      </Avatar>

      <Typography variant="h6" color="text.primary">
        Welcome {name}
      </Typography>

      <Typography variant="body1" color={'text.primary'}>
        This is your personal task manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
