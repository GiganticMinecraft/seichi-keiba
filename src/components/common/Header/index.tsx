import { Box, Button, Heading, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

import paths from '@/paths';

const Header = () => (
  <header>
    <Box
      w="100%"
      p={4}
      bgColor="teal.300"
      display="flex"
      justifyContent={{ base: 'center', md: 'start' }}
    >
      <Button colorScheme="teal" variant="ghost" textColor="white">
        <Link
          as={ReactLink}
          to={paths.home}
          _hover={{ textDecoration: 'none' }}
          _focus={{ textDecoration: 'none' }}
        >
          <Heading
            as="h1"
            size="xl"
            className="text-stroke-blue-700 text-stroke-1"
          >
            SEICHI KEIBA
          </Heading>
        </Link>
      </Button>
    </Box>
  </header>
);

export default Header;
