import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../components/pages/login/Login';
import NewLayout from '../components/layout/NewLayout';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/', element: <NewLayout /> },
]);

const MenuRoute = () => {
  return <RouterProvider router={router} />;
};

export default MenuRoute;
