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
  const [selectedCity,setSelectedCity]=useState(locations[0]);
  const [selectedFood,setSelectedFood]=useState({name:"Momo", id:"80461"});



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
    const filteredRes=resList.filter(res=> res?.card?.card?.info?.name.toLowerCase().includes(search.toLowerCase()))
    setFiltered(filteredRes)

 } 
}



const fetchRestaurant= async(lat,lng,id)=>{
    try{
    const api=getResURLCollection(lat,lng,id);  
    // console.log(api);
    
    const apiData=await fetch('https://pastebin.com/raw/0QcdEDBL',{
        
    });
    const data=await apiData.json();
;
      
    // console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFiltered(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //  
    // these are for live api data as it is bloced currently we are using dummy data 

    // const myres=data?.data?.cards?.filter(function(card){
    //     return card?.card?.card?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.Restaurant';
    // })
    // // console.log(myres);
    
//      setFiltered(myres ||[]);
//    setResList(myres || []);   
    }
    catch (error){
        console.log("error",error);
        
    }
   
}
const handleSelect=(city)=>{
    setSelectedCity(city);

}
const handleFoodSelect=(food)=>{
    setSelectedFood(food);
}

useEffect(()=>{

    fetchRestaurant(selectedCity.lat,selectedCity.lng, selectedFood.id)
       // 
   
},[selectedFood,selectedCity])




//check online status if offline then return message using custom Hooks.

const onlineStatus=useOnlineStatus();
if(onlineStatus===false) return (<h1 className="text-4xl">Looks Like !!you are offline. check your internet connections</h1>);





return resList?.length===0 || undefined ?(<Shimmer/>) :<>
    <div id="body" className=" w-full bg-slate-100 min-h-screen ">
{/* search restaurant */}
                 <div className="w-full md:w-[90%] mx-auto gap-4 p-2 sm:p-4 flex flex-col-reverse sm:flex-row   space-x-4  ">
                  
                   <div className="  ">
                    <DropDown cities={locations}
                    onSelect={handleSelect}
                    selectedCity={selectedCity}
                    />
                    <DropDownFood
                    foodTypes={FoodType}
                    onSelect={handleFoodSelect}
                    selectedFood={selectedFood}
                    />
                
                   </div>
                   
                   <div>
                  

                   </div>
                    <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    className="bg-white rounded-xl border px-8 p-2 border-gray-300 shadow-gray-400 shadow-2xl"
                    placeholder="Search Restaurants"
                    aria-label="Search for a product"
                    />
                </div>




         <div className="w-full px-4 md:w-[90%] text-center md:text-left mx-auto text-3xl md:text-4xl  py-4" >Top Restaurants in {selectedCity.city}</div>
         <div className="w-full px-4 md:w-[90%] text-center md:text-left  mx-auto text-3xl md:text-5xl font-bold  py-4" >
            {selectedFood.name}
           
            </div>
        
        <div id="res-container" className="w-full sm:w-[90%] mx-auto  flex flex-wrap justify-center gap-4
        mt-4">
            {
                filtered.map((restaurant,index)=> 
                    <Link to={"restaurant/"+restaurant.info.id}  key={restaurant?.info?.id}>
       
                           <RestaurantCard resdata={restaurant}/>
                    
                
               
                </Link>
                )
            }
        </div>
    </div>
 </>   
}

export default Body;


