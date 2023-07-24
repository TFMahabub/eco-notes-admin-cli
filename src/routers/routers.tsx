import { createBrowserRouter } from 'react-router-dom';
import DashboardLayouts from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Products from '../pages/Products/Products';
import WellcomePage from '../pages/wellcome/WellcomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayouts />,
    children: [
      {
        path: '/',
        element: <WellcomePage />,
      },
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
