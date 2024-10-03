import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Cooperation from "./pages/Cooperation";

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
          element: <Service/>,
        },
        {
          path: "project",
          element: <Project/>,
        },
        {
          path: "cooperation",
          element: <Cooperation/>,
        }
      ],
    },
  ]);
  














































