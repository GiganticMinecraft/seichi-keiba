import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';

import NotFound from '@/components/pages/404';
import Admins from '@/components/pages/Admins';
import Home from '@/components/pages/Home';
import Layout from '@/components/pages/Layout';
import Show from '@/components/pages/Show';
import Votes from '@/components/pages/Votes';
import paths from '@/paths';

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
        element: <Votes />,
      },
      {
        path: paths.votes.normal,
        element: <p>normal!</p>,
      },
      {
        path: paths.votes.odds,
        element: <p>odds!</p>,
      },
    ],
  },
  {
    path: paths.show.index,
    children: [
      {
        index: true,
        element: <Show />,
      },
      {
        path: paths.show.votes,
        element: <p>votes!</p>,
      },
      {
        path: paths.show.races,
        element: <p>races!</p>,
      },
      {
        path: paths.show.account,
        element: <p>account!</p>,
      },
    ],
  },
  {
    path: paths.admins.index,
    children: [
      {
        index: true,
        element: <Admins />,
      },
      {
        path: paths.admins.votes,
        element: <p>votes!</p>,
      },
      {
        path: paths.admins.races,
        element: <p>races!</p>,
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
