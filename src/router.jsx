import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Cooperation from "./pages/Cooperation";
import NotFound from "./pages/NotFound";

export const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products/>,
        },
        {
          path: "contact",
          element: <Contact/>,
        },
        {
          path: "service",
          element: <Service/>
        },
        {
          path: "cooperation",
          element: <Cooperation/>,
        },
        {
          path: "notFound",
          element: <NotFound/>
        }
      ],
    },
    {
          path: "project",
          element: <Project/>,
        },
  ]);
  














































