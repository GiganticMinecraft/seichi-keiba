import { Button } from '@chakra-ui/react';

type Props = {
  onClick?: () => void;
};

const GoHome = ({ onClick = () => undefined }: Props) => (
  <Button
    colorScheme="teal"
    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
    color="white"
    variant="solid"
    onClick={onClick}
  >
    Go Home
  </Button>
);

export default GoHome;
