import { MenuItem } from '@/components/common/Menu';
import H2 from '@/components/common/heading/h2';
import { admins } from '@/data/menuItems';
import paths from '@/paths';

import Admins from './presenter';

const items: MenuItem[] = admins.map((item) => {
  const newItem: MenuItem = {
    ...item,
    to: item.to?.replace(`${paths.admins.index}/`, ''),
  };

  return newItem;
});

const EnhancedVotes = () => (
  <>
    <H2>管理者メニュー</H2>
    <Admins items={items} />
  </>
);

export default EnhancedVotes;
