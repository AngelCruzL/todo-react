import { FC, ReactElement } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/Dashboard';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
