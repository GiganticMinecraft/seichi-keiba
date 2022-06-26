import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app';
import ChakraProvider from '@/containers/chakraProvider';

// eslint-disable-next-line import/no-unresolved
import 'windi.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
