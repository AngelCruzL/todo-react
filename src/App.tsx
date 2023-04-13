import { FC, ReactElement } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ComposeContext from '@context/Compose.context';
import { rootContext } from '@context/root.context';

import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/Dashboard';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
