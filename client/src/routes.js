import Admin from './page/Admin';
import Auth from './page/Auth';
import { ADMIN, AUTH, NOT_FOUND, ROOT } from './constants';
import Shop from './page/Shop';
import NotFound from './page/404';
import ProtectedRouter from './components/ProtectedRouter';

export const authRoutes = [
  {
    path: ROOT,
    element: <Shop />,
  },
  {
    path: ADMIN,
    element: <ProtectedRouter page={<Admin />} />,
  },
  {
    path: AUTH,
    element: <Auth />,
  },
  {
    path: NOT_FOUND,
    element: <NotFound />,
  },
];
