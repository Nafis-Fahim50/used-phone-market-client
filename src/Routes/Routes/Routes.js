import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn/SignIn";
import Signup from "../../Pages/Login/Signup/Signup";
import Products from "../../Pages/Products/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;