import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn/SignIn";
import Products from "../../Pages/Products/Products";

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
                element: <Products></Products>,
                loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;