import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NotFound from '@/components/pages/404';
import Home from '@/components/pages/Home';
import Layout from '@/components/pages/Layout';

const SiteRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default SiteRoutes;
