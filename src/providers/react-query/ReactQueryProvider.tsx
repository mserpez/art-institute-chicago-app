import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export default function ReactQueryProvider(props: React.PropsWithChildren<{}>) {
  const {children} = props;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
