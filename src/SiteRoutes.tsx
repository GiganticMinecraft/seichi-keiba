import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';

import NotFound from '@/components/pages/404';
import Home from '@/components/pages/Home';
import Layout from '@/components/pages/Layout';

import paths from './paths';

const baseRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: paths.votes.index,
    children: [
      {
        index: true,
        element: <p>index!</p>,
      },
      {
        path: paths.votes.normal,
        element: <p>normal!</p>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const routes: RouteObject[] = [
  {
    path: '/*',
    element: <Layout />,
    children: baseRoutes,
  },
];

const Routes = () => {
  const element = useRoutes(routes);

  return element;
};

const SiteRoutes = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default SiteRoutes;
