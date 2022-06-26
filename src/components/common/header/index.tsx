import { Box, Heading } from '@chakra-ui/react';

const Header = () => (
  <header>
    <Box w="100%" color="white" p="4" bgColor="teal.400">
      <Heading as="h1" size="xl">
        SEICHI KEIBA
      </Heading>
    </Box>
  </header>
);

export default Header;
