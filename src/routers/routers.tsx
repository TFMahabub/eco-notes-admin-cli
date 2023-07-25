import { createBrowserRouter } from 'react-router-dom';
import DashboardLayouts from '../layouts/DashboardLayout';
import Admin from '../pages/Admin/Admin';
import BlogsPage from '../pages/Products/Blogs/BlogPage';
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
        path: '/products/blogs',
        element: <BlogsPage />,
      },
      {
        path: '/products/tags',
        element: <BlogsPage />,
      },
      {
        path: '/products/blogs',
        element: <BlogsPage />,
      },
    ],

  },
]);

export default router;
