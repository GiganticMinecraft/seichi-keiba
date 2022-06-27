import { Box, Heading } from '@chakra-ui/react';

const Header = () => (
  <header>
    <Box w="100%" color="white" p={4} bgColor="teal.200">
      <Heading
        as="h1"
        size={{ base: 'lg', xl: 'xl' }}
        className="text-stroke-blue-700 text-stroke-1"
      >
        SEICHI KEIBA
      </Heading>
    </Box>
  </header>
);

export default Header;
