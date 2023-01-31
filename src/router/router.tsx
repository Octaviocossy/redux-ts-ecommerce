import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Routes } from '../models';
import { Checkout, Products } from '../pages';
import { Layout } from '../ui';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: Routes.HOME, element: <Navigate to={`${Routes.PRODUCTS}/1`} /> },
      { path: `${Routes.PRODUCTS}/:page`, element: <Products /> },
      { path: Routes.CHECKOUT, element: <Checkout /> },
    ],
  },
]);

export default router;
