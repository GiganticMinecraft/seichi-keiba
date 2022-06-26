import { ChakraProvider } from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

type Props = {
  children: React.ReactNode;
  theme?: Dict;
};

const Provider = ({ children, theme = undefined }: Props) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default Provider;
