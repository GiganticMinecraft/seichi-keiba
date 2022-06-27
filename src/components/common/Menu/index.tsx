import { Button, Grid, Icon, GridItem, Text, Link } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link as ReactLink } from 'react-router-dom';

import paths from '@/paths';

export type MenuItem = {
  title: string;
  color: string;
  iconType: IconType;
  to?: string;
};

type Props = {
  menuItems: MenuItem[];
};

const Menu: React.FCX<Props> = ({ menuItems, className }) => (
  <Grid
    gap={4}
    templateColumns={{ md: 'repeat(2, 1fr)' }}
    className={className}
  >
    {menuItems.map((item) => (
      <GridItem rowSpan={2} key={item.title}>
        <Link
          as={ReactLink}
          to={item.to ?? paths.home}
          _hover={{ textDecoration: 'none' }}
          _focus={{ textDecoration: 'none' }}
        >
          <Button
            flexDirection="column"
            bgColor={`${item.color}.300`}
            w="full"
            h="full"
            py={2}
            _hover={{ backgroundColor: `${item.color}.100` }}
            _focus={{ backgroundColor: `${item.color}.500` }}
          >
            <Icon as={item.iconType} w={10} h={10} mb={1} />
            <Text fontSize="lg">{item.title}</Text>
          </Button>
        </Link>
      </GridItem>
    ))}
  </Grid>
);

export default Menu;
