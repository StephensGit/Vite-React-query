import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Shops from './Shops';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Vite - React Query</h1>
        <Shops />
      </div>
    </QueryClientProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
