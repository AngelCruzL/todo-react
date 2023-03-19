import { FC, ReactElement } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { customTheme } from './theme/customTheme';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      
      <div>Hello World</div>
    </ThemeProvider>
  );
};

export default App;
