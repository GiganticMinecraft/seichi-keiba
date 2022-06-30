import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-unresolved
import 'windi.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
