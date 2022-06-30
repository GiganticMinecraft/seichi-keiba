import { ChakraProvider } from '@chakra-ui/react';

import type { AppProps } from 'next/app';

// eslint-disable-next-line import/no-unresolved
import 'windi.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
