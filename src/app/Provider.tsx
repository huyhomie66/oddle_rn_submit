import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const Provider = ({children}) => (
  <SafeAreaProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </SafeAreaProvider>
);

export default Provider;
