import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '@/components/pages/home';

const SiteRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default SiteRoutes;
