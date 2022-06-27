import { Box, Heading, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

import paths from '@/paths';

const Header = () => (
  <header>
    <Box w="100%" color="white" p={4} bgColor="teal.200">
      <Link
        as={ReactLink}
        to={paths.home}
        _hover={{ textDecoration: 'none' }}
        _focus={{ textDecoration: 'none' }}
      >
        <Heading
          as="h1"
          size={{ base: 'lg', xl: 'xl' }}
          className="text-stroke-blue-700 text-stroke-1"
        >
          SEICHI KEIBA
        </Heading>
      </Link>
    </Box>
  </header>
);

export default Header;
