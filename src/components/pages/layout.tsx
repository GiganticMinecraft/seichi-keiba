import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/common/header';

const Layout = () => (
  <>
    <Header />
    <Container
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      py={4}
    >
      <Outlet />
    </Container>
  </>
);

export default Layout;
