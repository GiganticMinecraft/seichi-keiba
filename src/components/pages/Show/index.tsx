import H2 from '@/components/common/headings/H2';
import { playersShow } from '@/data/menuItems';

import Show from './presenter';

const EnhancedShow = () => (
  <>
    <H2>照会メニュー</H2>
    <Show items={playersShow} />
  </>
);

export default EnhancedShow;
