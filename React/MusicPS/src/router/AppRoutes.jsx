import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import ArtistDashBoard from "../pages/ArtistDashBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Favrouite from "../pages/Favrouite";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import UploadSong from "../pages/UploadSong";
import PublicRoute from "./PublicRoute";
import AuthLayout from "../layout/AuthLayout";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            { path: "", element: <Home /> },
            { path: "favrouite", element: <Favrouite /> },
            { path: "artist", element: <ArtistDashBoard /> },
            { path: "artist/upload-song", element: <UploadSong /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
