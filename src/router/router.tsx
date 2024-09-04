// import { Suspense } from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorLayout from "../components/comman/RootError";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading....">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback="Loading....">
            <Contact />{" "}
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
