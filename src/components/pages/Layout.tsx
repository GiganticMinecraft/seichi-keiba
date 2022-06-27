import { Container } from '@chakra-ui/react';

import Header from '@/components/common/Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Container
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      py={4}
    >
      {children}
    </Container>
  </>
);

export default Layout;
