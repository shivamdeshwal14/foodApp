import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utils/mockData";
import { useState } from "react";

const Body=()=>{
 const[reslist,setResList]=useState(resList);
 return<>
    <div id="body" className=" w-full ">
        <button onClick={()=>{
            setResList(reslist.filter(function(res){
                return res.rating>4.1;
            }))
            console.log(resList)
        }}>TOP Rated res</button>
       <div className="text-3xl px-4 sm:px-8 md:px-64 py-4" >Top Restaurants in Bareilly</div>
        <div id="res-container" className="w-full flex flex-wrap justify-center gap-4
        px-4 sm:px-8  lg:px-64 mt-4">
            {
                reslist .map((restaurant,index)=> <RestaurantCard key={index} resdata={restaurant}/>)
            }
        </div>
    </div>
 </>   
}

export default Body;



//  <div id="search-bar  " className="flex gap-4 space-x-4 px-64 py-8 bg-blue-100">
//         <div >Search</div>
//         <input type="text" name="" id="" placeholder="Enter res/dish" />
//         </div>