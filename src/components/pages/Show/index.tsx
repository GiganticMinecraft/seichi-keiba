import { MenuItem } from '@/components/common/Menu';
import H2 from '@/components/common/heading/h2';
import { playersShow } from '@/data/menuItems';
import paths from '@/paths';

import Show from './presenter';

const items: MenuItem[] = playersShow.map((item) => {
  const newItem: MenuItem = {
    ...item,
    to: item.to?.replace(`${paths.show.index}/`, ''),
  };

  return newItem;
});

const EnhancedShow = () => (
  <>
    <H2>照会メニュー</H2>
    <Show items={items} />
  </>
);

export default EnhancedShow;
