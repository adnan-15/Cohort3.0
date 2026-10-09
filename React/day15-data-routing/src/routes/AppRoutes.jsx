import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {path:"" , element:<Home/>},
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
