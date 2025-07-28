import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';

// page
import Home from './pages/Home';
import Cart from './pages/Cart';
import LoginRegister from './pages/LoginRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/login',
    element: <LoginRegister />
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
