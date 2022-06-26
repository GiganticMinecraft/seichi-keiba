import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Layout from '@/components/pages/layout';
import SiteRoutes from '@/siteRoutes';

// eslint-disable-next-line import/no-unresolved
import 'windi.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <SiteRoutes />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
);
