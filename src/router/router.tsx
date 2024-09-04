import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorLayout from "../components/comman/RootError";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
