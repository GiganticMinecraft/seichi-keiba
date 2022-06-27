import H2 from '@/components/common/heading/h2';

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
    <H2>お知らせ</H2>
    <NewsList className="mt-2" />
    <H2>メニュー</H2>
    <Menu menuItems={playersMenuItems} className={menuLayouts} />
    {isAdmin && (
      <>
        <H2>管理者メニュー</H2>
        <Menu menuItems={adminMenuItems} className={menuLayouts} />
      </>
    )}
  </>
);

export default Home;
