    import React, { useState } from "react";
    import ReactDOM from "react-dom/client"
    import Header from "./Components/Header";
    import Body from "./Components/Body";
    import About from "./Components/About";
    import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
    


const App=()=>{


    return<>
    <Header/>
    <Outlet/>

    </>
    



        




}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
          {
              path:'/',
             element:<Body/>
          },
             {
            path:'/about',
            element:<About/>
            },
            {
            path:'/restaurant/:resId',
            element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
   
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)
    root.render(<RouterProvider router={appRouter}/>)