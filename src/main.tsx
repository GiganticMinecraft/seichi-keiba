import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useRoutes, BrowserRouter } from 'react-router-dom';

import SiteRoutes from '@/SiteRoutes';

// eslint-disable-next-line import/no-unresolved
import 'windi.css';

const Routes = () => {
  const routes = useRoutes(SiteRoutes);

  return routes;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
