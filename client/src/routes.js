import Admin from "./page/Admin";
import Auth from "./page/Auth";
import { ADMIN, AUTH, NOT_FOUND, ROOT } from "./constants";
import Shop from "./page/Shop";
import NotFound from "./page/404";

export const authRoutes = [
  {
    path: ROOT,
    element: <Shop />,
  },
  {
    path: ADMIN,
    element: <Admin />,
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
