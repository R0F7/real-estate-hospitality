import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/update-profile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);

export default route;