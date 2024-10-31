import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../components/pages/login/Login';
import NewLayout from '../components/layout/NewLayout';
import Dashboard from '../components/pages/dashboard/Dashboard';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/', element: <NewLayout />, children: [{ path: '/test', element: <Dashboard /> }] },
]);

const MenuRoute = () => {
  return <RouterProvider router={router} />;
};

export default MenuRoute;
