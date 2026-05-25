import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;