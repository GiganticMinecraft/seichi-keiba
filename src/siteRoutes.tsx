import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NotFound from '@/components/pages/404';
import Home from '@/components/pages/home';

const SiteRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default SiteRoutes;
