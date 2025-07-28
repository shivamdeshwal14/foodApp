import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";



const App=()=>{


    return<>
    <Header/>
    <Body/>
    </>
    



        




}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)