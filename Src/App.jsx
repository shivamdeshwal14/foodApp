    import React, { useState,lazy, Suspense } from "react";
    import ReactDOM from "react-dom/client"
    import Header from "./Components/Header";
    import Body from "./Components/Body";
    import About from "./Components/About";
    import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
    import Error from "./Components/Error";
    import RestaurantMenu from "./Components/RestaurantMenu";
    // import Grocery from "./Components/Grocery";
    import userContext from "./Utils/userContext";
import Cart from "./Components/Cart/Cart";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Footer from "./Components/Footer";
import OrderHistory from "./Components/OrderHistory"
import Login from "./Components/Auth/Login";



const App=()=>{
    const [searched , setSearched] = useState("");



    return<>
    <Provider store={appStore}>

    

    <userContext.Provider value={{name:"Anushka",searched,setSearched}}>

    <div className='flex flex-col min-h-screen bg-slate-100'>
      <Header/>
   <main className='pt-32 flex-grow'>
    
       <Outlet/>  
   </main>


    <Footer/>
    </div>
     </userContext.Provider>




     </Provider>
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
              path:'/login',
             element:<Login/>
          },
             {
            path:'/orderHistory',
            element:<OrderHistory/>
            },
            {
            path:'/restaurant/:resId',
            element:<RestaurantMenu/>
            },
            
           
            {
            path:'/cart',
            element:<Cart/>
            },
            
        ],
        errorElement:<Error/>
    },
   
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)
    root.render(<RouterProvider router={appRouter}/>)