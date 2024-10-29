import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../components/pages/login/Login';

const router = createBrowserRouter([{ path: '/', element: <Login /> }]);

const MenuRoute = () => {
  return <RouterProvider router={router} />;
};

export default MenuRoute;
