// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.tsx';
import App from './page/App.tsx';
import Delivery from './page/Delivery.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/delivery", element: <Delivery /> },
    ]
  }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
);
