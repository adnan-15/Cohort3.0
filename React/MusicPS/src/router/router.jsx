import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home"
import ArtistDashBoard from "../pages/ArtistDashBoard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Favrouite from "../pages/Favrouite"
import MainLayout from "../layout/MainLayout"

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        children:[
            {
                index:true, //path:""
                element:<Home/>
            }
            ,{
                path:"favrouite",
                element:<Favrouite/>
            }
            ,{
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
            ,{
                path:"artist-dashboard",
                element:<ArtistDashBoard/>
            }
        ]
    }
])
export default router