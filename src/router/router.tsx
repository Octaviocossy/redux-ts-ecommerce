import { createBrowserRouter } from 'react-router-dom';

import { Routes } from '../models';
import { Checkout, Home } from '../pages';

const router = createBrowserRouter([
  { path: Routes.HOME, element: <Home /> },
  { path: Routes.CHECKOUT, element: <Checkout /> },
]);

export default router;
