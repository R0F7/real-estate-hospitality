import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivetRoute from "./PrivetRoute";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/fake-data.json')
            },
            {
                path:'/estate/:id',
                loader: ()=> fetch('/fake-data.json'),
                element:<PrivetRoute><EstateDetails></EstateDetails></PrivetRoute>,
            },
            {
                path:'/profile',
                element:<PrivetRoute><Profile></Profile></PrivetRoute>
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