import NewLayout from '@components/layout/NewLayout';
import Auction from '@components/pages/auction/Auction';
import Dashboard from '@components/pages/dashboard/Dashboard';
import Exchange from '@components/pages/exchange/Exchange';
import Login from '@components/pages/login/Login';
import Support from '@components/pages/support/Support';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <NewLayout />,
    children: [
      { path: '/main', element: <Dashboard /> },
      { path: '/auction', element: <Auction /> },
      { path: '/exchange', element: <Exchange /> },
      { path: '/support', element: <Support /> },
    ],
  },
]);

const MenuRoute = () => {
  return <RouterProvider router={router} />;
};

export default MenuRoute;
