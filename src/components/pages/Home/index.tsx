import { admins, playersShow, playersVote } from '@/data/menuItems';

import Home from './presenter';

const EnhancedHome = () => (
  <Home
    playersMenuItems={playersVote.concat(playersShow)}
    adminMenuItems={admins}
  />
);

export default EnhancedHome;
