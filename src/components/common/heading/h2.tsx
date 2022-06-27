import { Heading } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const H2 = ({ children }: Props) => (
  <Heading as="h2" textAlign="center" size={{ base: 'md', xl: 'xl' }} my={2}>
    {children}
  </Heading>
);

export default H2;
