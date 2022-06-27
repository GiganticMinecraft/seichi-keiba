import H2 from '@/components/common/heading/h2';
import { playersVote } from '@/data/menuItems';

import Votes from './presenter';

const EnhancedVotes = () => (
  <>
    <H2>投票メニュー</H2>
    <Votes items={playersVote} />
  </>
);

export default EnhancedVotes;
