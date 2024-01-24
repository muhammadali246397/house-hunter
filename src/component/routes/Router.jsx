import {
    createBrowserRouter
  } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import LogIn from "../pages/login/login";
import SignUp from "../pages/signup/SignUp";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<LogIn></LogIn>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            }
        ]
    }
  ])

  export default router