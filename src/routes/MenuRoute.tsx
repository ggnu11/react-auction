import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../components/pages/login/Login';
import NewLayout from '../components/layout/NewLayout';
import Dashboard from '../components/pages/dashboard/Dashboard';
import Auction from '../components/pages/auction/Auction';
import Support from '../components/pages/support/Support';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <NewLayout />,
    children: [
      { path: '/main', element: <Dashboard /> },
      { path: '/auction', element: <Auction /> },
      { path: '/support', element: <Support /> },
    ],
  },
]);

const MenuRoute = () => {
  return <RouterProvider router={router} />;
};

export default MenuRoute;
