import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
    import { useParams } from "react-router-dom";
import { RES_MENU } from "../Utils/Constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu.js";

    const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const[menu,setMenu]=useState([]);
      console.log(resInfo);


    return (resInfo===null) ? <Shimmer/> :<>
        <div className="w-full">    
                 <div id="res-container" className="w-full flex flex-wrap justify-center gap-4
                     px-4 sm:px-8  lg:px-64 mt-8">
                        <div id="res-card" className="min-h-68 w-full px-16 rounded-xl">
                                {/* <h3>{resInfo.data.cards[0].card.card.text}</h3> */}
                                <h1 className="text-3xl font-bold">{resInfo.data.cards[0].card.card.text}</h1>
                                <h2 className="text-2xl mt-16">Recommended</h2>

                            {/* Menu Items are calling here passingdata as props */}
                               {
                                menu.map(function callback(item,index){
                                    return <MenuItem key={index} menuItems={item}/>
                                })

                               }
                             </div>
                         </div>
            </div>
        </>
}
export default RestaurantMenu;