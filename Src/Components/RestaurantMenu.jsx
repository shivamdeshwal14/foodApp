import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuComponents/MenuItem";
    import { useParams } from "react-router-dom";
import { RES_MENU } from "../Utils/Constants";
import useRestaurantMenu from "../CustomHooks/useRestaurantMenu";
import RestaurantDetailCard from "./MenuComponents/RestaurantDetailCard";
import DealsForYou from "./MenuComponents/DealsForYou";
import MenuCategory from "./MenuComponents/MenuCategory";
import MenuShimmer from "./MenuComponents/MenuShimmer";
import { useDispatch, useSelector } from "react-redux";
import { addRes } from "../Redux/ResSlice";

    const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const[showItems,setShowItems]=useState(false);
    const [showIndex,setShowIndex]=useState(0);
    const restaurant=useSelector((store)=>store.restaurant.res);
    const dispatch=useDispatch();

    


        
        
            
        const resDetails=(resInfo?.data?.cards?.[2]?.card?.card?.info) || null;
        const categories=resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards.filter(function(card){
            return card?.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
        })
        || 
        resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards.filter(function(card){
            return card?.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
        })

  
        useEffect(()=>{
            if(resDetails) dispatch(addRes(resDetails));            
        },[resDetails])

        
        if(resInfo==null) return<MenuShimmer/> 


        

    






    
   return<>

   {
    resDetails ? (  <div className="w-full lg:w-[70%] xl:w-[50%] mx-auto">    

            
            <RestaurantDetailCard resDetails={resDetails}/>
            {/* <DealsForYou/> */}
           
               {
                categories.map((Items,index)=>{
                    return <MenuCategory 
                        
                    key={Items.card.card.categoryId}
                    category={Items}
                    // sending id to child so that we can put it in redux id:{card},qty so that user can only add items from 1 restaurant
                    resId={resDetails.id}
                    showItems={index===showIndex ? true :false}
                    setShowIndex={()=>setShowIndex(showIndex===index?null :index)}
                     
                     />
                })
            }

        


                
            </div>
            ):(
               <div>
                <MenuShimmer/>
               </div>
            )
   }
      
        </>
}
export default RestaurantMenu;