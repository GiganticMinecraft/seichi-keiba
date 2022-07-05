import { MenuItem } from '@/components/common/Menu';
import H2 from '@/components/common/heading/h2';
import { playersVote } from '@/data/menuItems';
import paths from '@/paths';

import Votes from './presenter';

const items: MenuItem[] = playersVote.map((item) => {
  const newItem: MenuItem = {
    ...item,
    to: item.to?.replace(`${paths.votes.index}/`, ''),
  };

  return newItem;
});

const EnhancedVotes = () => (
  <>
    <H2>投票メニュー</H2>
    <Votes items={items} />
  </>
);

export default EnhancedVotes;
