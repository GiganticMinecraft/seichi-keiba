import { RouteObject } from 'react-router-dom';

import NotFound from '@/components/pages/404';
import Home from '@/components/pages/Home';
import Layout from '@/components/pages/Layout';

const SiteRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // {
      //   path: '/courses',
      //   element: <Courses />,
      // },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default SiteRoutes;
