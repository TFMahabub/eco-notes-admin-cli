import { createBrowserRouter } from 'react-router-dom';
import DashboardLayouts from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import BlogsPage from '../pages/Products/Blogs/BlogPage';
import ListingPage from '../pages/Products/Listings/ListingPage';
import TagsPage from '../pages/Products/Tags/TagsPage';
import DeveloperUsersPage from '../pages/users/Developers/DeveloperUsersPage';
import GestUsersPage from '../pages/users/gestUsers.tsx/GestUsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayouts />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/products/blogs',
        element: <BlogsPage />,
      },
      {
        path: '/products/tags',
        element: <TagsPage />,
      },
      {
        path: '/products/listing',
        element: <ListingPage />,
      },
      {
        path: '/users/gest-users',
        element: <GestUsersPage />,
      },
      {
        path: '/users/developers-users',
        element: <DeveloperUsersPage />,
      },
    ],

  },
]);

export default router;
