import { useNavigate } from 'react-router-dom';

import paths from '@/paths';

import GoHome from './presenter';

const EnhancedGoHome = () => {
  const navigate = useNavigate();

  return <GoHome onClick={() => navigate(paths.home, { replace: true })} />;
};

export default EnhancedGoHome;
