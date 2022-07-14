import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const Provider = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default Provider;
