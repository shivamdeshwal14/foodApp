import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";
import { getResURLCollection } from "../Utils/Constants";
import DropDown from "./DropDown";
import {locations} from "../Utils/mockData"
import { FoodType } from "../Utils/mockData";
import DropDownFood from "./DropDownFood";

const Body=()=>{
 const[resList,setResList]=useState([]);
 const[filtered,setFiltered]=useState([]);
  const[search,setSearch]=useState(""); 

// console.log(resList);

// console.log(search);

  



//   const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
//  fetch using async await 
//   const{setSearched}=useContext(userContext);




const handleSearchChange=(e)=>{
 const value=e.target.value;
 setSearch(value);
 if(value=== ""){
    setFiltered(resList);
 }
 else{
    const filteredRes=resList.filter(res=> {
        console.log("Res",res)
       return res?.info?.name.toLowerCase().includes(search.toLowerCase())
    }
    )    
    setFiltered(filteredRes)

 } 
}

const fetchRestaurant=async()=>{
    try {
                     const apiData=await fetch('https://pastebin.com/raw/0QcdEDBL');
                    const data=await apiData.json();
                               
                    let res= data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                    const mincard=32;
                    while(res.length<32){
                        res=[...res,...res];
                    }
                    res=res.slice(0,mincard);
                     setFiltered(res);
                     setResList(res);

    } catch (error) {
        console.log("ERROR IN FETCH",error);
          
    }   
}

// const fetchRestaurantByLiveApi= async(lat,lng,id)=>{
//     try{
//     const api=getResURLCollection(lat,lng,id);  
//     // console.log(api);
    
//     const apiData=await fetch(api,{
        
//     });
//     const data=await apiData.json();
//     console.log(data);   
//     let res= data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     const myres=data?.data?.cards?.filter(function(card){
//         return card?.card?.card?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.Restaurant';
//     })
//     setFiltered(myres ||[]);
//    setResList(myres || []);   
//     }
//     catch (error){
//         console.log("error",error);
        
//     }
   
// }


const handleSelect=(city)=>{
    setSelectedCity(city);

}
const handleFoodSelect=(food)=>{
    setSelectedFood(food);
}

useEffect(()=>{

    fetchRestaurant();
       // 
   
},[])




//check online status if offline then return message using custom Hooks.

const onlineStatus=useOnlineStatus();
if(onlineStatus===false) return (

    <div className="w-full flex items-center">
        <h1 className="text-4xl text-center px-4">Looks Like !!you are offline. check your internet connections</h1>
    </div>
);





return resList?.length===0 || undefined ?(<Shimmer/>) :<>
    <div id="body" className=" w-full bg-slate-100 min-h-screen ">
{/* search restaurant */}
                 <div className="w-full md:w-[90%] mx-auto gap-4 p-2 sm:p-4 flex flex-col-reverse sm:flex-row   space-x-4  ">
                  
                   
                   
                    <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    className="bg-white rounded-xl border px-8 p-2 border-gray-300 shadow-gray-400 shadow-2xl"
                    placeholder="Search Restaurants"
                    aria-label="Search for a product"
                    />
                </div>




         <div className="w-full px-4 md:w-[90%] text-center md:text-left mx-auto text-3xl md:text-4xl  py-4" >Top Restaurants in Bareilly</div>
         <div className="w-full px-4 md:w-[90%] text-center md:text-left  mx-auto text-3xl md:text-5xl font-bold  py-4" >
          Your favourite Dishes
           
            </div>
        
        <div id="res-container" className="w-full  md:w-[95%] 3xl:w-[90%] mx-auto   flex flex-wrap justify-center gap-6
        mt-4">
            {
                filtered.map((restaurant,index)=> 
                    <Link to={"restaurant/"+restaurant.info.id}  key={index+"="+restaurant?.info?.id}>
       
                           <RestaurantCard resdata={restaurant}/>
                    
                
               
                </Link>
                )
            }
        </div>
    </div>
 </>   
}

export default Body;


