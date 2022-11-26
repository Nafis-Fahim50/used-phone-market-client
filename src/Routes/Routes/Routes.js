import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn/SignIn";
import Signup from "../../Pages/Login/Signup/Signup";
import Products from "../../Pages/Products/Products";
import SellerRoute from "../../SellerRoute/SellerRoute";
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
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/addProducts',
                element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path:'/dashboard/myProducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/allSellers',
                element:<AllSellers></AllSellers>
            }
        ]
    }
])

export default router;