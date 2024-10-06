import { createHashRouter } from "react-router-dom";

import App from "../App";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Services from "../pages/Services";
import MiniDrawer from "../components/MiniDrawer";

export const router = createHashRouter([
  {
    path: "/",
    element: <MiniDrawer />,
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);
