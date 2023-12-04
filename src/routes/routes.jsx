import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/LogIn/Login";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import Posts from "../Components/Posts/Posts";
import Users from "../Components/Users/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/users',
        element: <Users/>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
        path: '/posts',
        element: <Posts/>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/error',
        element: <Error/>
    }
])

export default  router;