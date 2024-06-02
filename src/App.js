import ReactDOM from "react-dom";
import React from "react";
import { useEffect } from "react";
import Header from "./component.js/Header";
import Body from "./component.js/Body";
import RestaurantCard from "./component.js/RestaurantCard";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./component.js/About";
import Error from "./component.js/Error";
import Contact from "./component.js/Contact";


const AppLayout = ()=>{
    return(

        <div>
            <Header/>
           <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout/>,
        children:[

            {
                path: "/",
                element: <Body/>,
            },

            {
                path: "/about",
                element: <About/>,
            },

            {
                path: "/contact",
                element: <Contact/>,
            }
        ],
        errorElement:<Error/>
    }



    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)