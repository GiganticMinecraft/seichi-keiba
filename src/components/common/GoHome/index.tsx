import { useNavigate } from 'react-router-dom';

import GoHome from './presenter';

const EnhancedGoHome = () => {
  const navigate = useNavigate();

  return <GoHome onClick={() => navigate('/', { replace: true })} />;
};

export default EnhancedGoHome;
