import { createBrowserRouter } from 'react-router-dom';
import DashboardLayouts from '../layouts/DashboardLayout';
import Admin from '../pages/Admin/Admin';
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
        path: '/admin',
        element: <Admin />,
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
