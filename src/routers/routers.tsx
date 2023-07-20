import { createBrowserRouter } from 'react-router-dom';
import DashboardLayouts from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Products from '../pages/Products/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayouts />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/users',
        element: <p>profile</p>,
      },
      {
        path: '/cart-table',
        element: <p>cart-table</p>,
      },
    ],

  },
]);

export default router;
