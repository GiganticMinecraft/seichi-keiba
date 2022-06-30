import { useRouter } from 'next/router';

import paths from '@/paths';

import GoHome from './presenter';

const EnhancedGoHome = () => {
  const router = useRouter();

  return <GoHome onClick={() => router.replace(paths.home)} />;
};

export default EnhancedGoHome;
