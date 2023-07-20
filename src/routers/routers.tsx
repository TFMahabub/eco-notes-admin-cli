import { createBrowserRouter } from 'react-router-dom';
import DashboardLayouts from '../layouts/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';

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
        path: '/blogs',
        element: <p>blogpage</p>,
      },
      {
        path: '/profile',
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
