import H2 from '@/components/common/headings/H2';
import { admins } from '@/data/menuItems';

import Admins from './presenter';

const EnhancedAdmins = () => (
  <>
    <H2>管理者メニュー</H2>
    <Admins items={admins} />
  </>
);

export default EnhancedAdmins;
