import { createBrowserRouter } from 'react-router-dom';

import { Routes } from '../models';
import { Checkout, Home } from '../pages';
import { Layout } from '../ui';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: Routes.HOME, element: <Home /> },
      { path: `${Routes.HOME}/:page`, element: <Home /> },
      { path: Routes.CHECKOUT, element: <Checkout /> },
    ],
  },
]);

export default router;
