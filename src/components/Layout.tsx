import { Container } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <main>
    <Container
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      py={4}
    >
      {children}
    </Container>
  </main>
);

export default Layout;
