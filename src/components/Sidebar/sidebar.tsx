import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

import { Profile } from '../Profile';
import { CreateTaskForm } from '../CreateTaskForm';

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        blockSize: '100vh',
        inlineSize: '100%',
        backgroundColor: 'background.paper',
      }}
    >
      <Profile name={'Ángel Cruz'} />
      <CreateTaskForm />
    </Grid>
  );
};

export default Sidebar;
