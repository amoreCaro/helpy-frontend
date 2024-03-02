import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/> ,
  },
  {
    path: "/Profile",
    element:<Profile/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
