import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.tsx';
import Delivery from './Delivery.tsx';
import App from './page/App.tsx';
// import { StrictMode } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },  // 👈 Use `index: true` instead of path: "/"
      { path: "delivery", element: <Delivery /> },
    ]
  }
]);


createRoot(document.getElementById('root') as HTMLElement).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
);
