import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import paths from '@/paths';

const GoHome = () => (
  <Button
    colorScheme="teal"
    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
    color="white"
    variant="solid"
  >
    <Link href={paths.home}>Go Home</Link>
  </Button>
);

export default GoHome;
