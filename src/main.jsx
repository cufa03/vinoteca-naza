import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import WinesPage from './pages/WinesPage';
import WinePage from './pages/WinePage.jsx';

import './index.css';
import Navbar from './components/Navbar.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/vinos',
    element: <WinesPage />,
  },
  {
    path: '/vinos/:vinoId',
    element: <WinePage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    {/* <h1>footer section</h1> */}
  </StrictMode>
);
