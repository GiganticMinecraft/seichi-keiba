import Menu, { MenuItem } from '@/components/common/Menu';
import H2 from '@/components/common/heading/h2';

import NewsList from './NewsList';

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
    <Menu items={playersMenuItems} className={menuLayouts} />
    {isAdmin && (
      <>
        <H2>管理者メニュー</H2>
        <Menu items={adminMenuItems} className={menuLayouts} />
      </>
    )}
  </>
);

export default Home;
