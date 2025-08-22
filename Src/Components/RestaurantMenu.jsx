import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
    import { useParams } from "react-router-dom";
import { RES_MENU } from "../Utils/Constants";
import useRestaurantMenu from "../CustomHooks/useRestaurantMenu";
import RestaurantDetailCard from "./MenuComponents/RestaurantDetailCard";
import DealsForYou from "./MenuComponents/DealsForYou";
import MenuCategory from "./MenuComponents/MenuCategory";

    const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
       

if(resInfo==null) return<h1>Loadinggggg</h1>

console.log(resInfo);

const resDetails=resInfo?.data?.cards[2]?.card?.card?.info;

const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
?.cards.filter(function(card){
    return card?.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
})



return<>
        <div className="w-full lg:w-[70%] xl:w-[50%] mx-auto">    
            <RestaurantDetailCard resDetails={resDetails}/>
            <DealsForYou/>
           
               {
                categories.map((Items,index)=>{
                    return <MenuCategory key={Items.card.card.categoryId} category={Items}/>
                })
            }

        


                
            </div>
        </>
}
export default RestaurantMenu;