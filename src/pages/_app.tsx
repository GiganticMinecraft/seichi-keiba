import { ChakraProvider } from '@chakra-ui/react';

import Layout from '@/components/Layout';

import type { AppProps } from 'next/app';

// eslint-disable-next-line import/no-unresolved
import 'windi.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
