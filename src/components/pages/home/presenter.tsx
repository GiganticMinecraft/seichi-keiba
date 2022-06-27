import { Heading } from '@chakra-ui/react';

import Menu, { MenuItem } from './menu';
import NewsList from './newsList';

type Props = {
  playersMenuItems: MenuItem[];
  adminMenuItems: MenuItem[];
  isAdmin?: boolean;
};

const menuLayouts = 'mt-4 px-0 md:px-10';

const Home = ({ playersMenuItems, adminMenuItems, isAdmin = false }: Props) => (
  <>
    <Heading as="h2" textAlign="center" size={{ base: 'md', xl: 'xl' }} my={2}>
      お知らせ
    </Heading>
    <NewsList className="mt-2" />
    <Heading as="h2" textAlign="center" size={{ base: 'md', xl: 'xl' }} my={2}>
      メニュー
    </Heading>
    <Menu menuItems={playersMenuItems} className={menuLayouts} />
    {isAdmin && (
      <>
        <Heading
          as="h2"
          textAlign="center"
          size={{ base: 'md', xl: 'xl' }}
          my={2}
        >
          管理者メニュー
        </Heading>
        <Menu menuItems={adminMenuItems} className={menuLayouts} />
      </>
    )}
  </>
);

export default Home;
