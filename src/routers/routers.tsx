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
    ],

  },
]);

export default router;
