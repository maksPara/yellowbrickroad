import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
