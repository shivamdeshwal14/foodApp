import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import axios from "axios";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";

const Body=()=>{
 const[resList,setResList]=useState([]);
 const[filtered,setFiltered]=useState([]);
  const[search,setSearch]=useState(""); 
//  fetch using async await 

const getData= async()=>{
    try {
         const res=await fetch('https://pastebin.com/raw/0QcdEDBL');
         const data= await res.json();
         console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
         setResList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); 
         setFiltered(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
         
    } catch (error) {
        console.log("Error in fetch"+error)
    }
  

}



useEffect(()=>{
    getData();  
   
},[])
//check online status if offline then return message using custom Hooks.

const onlineStatus=useOnlineStatus();
if(onlineStatus===false) return (<h1 className="text-4xl">Looks Like !!you are offline. check your internet connections</h1>);



return resList.length===0 ?(<Shimmer/>) :<>
    <div id="body" className=" w-full ">
{/* search restaurant */}
            <div id="search-div" className="w-full flex flex-col  sm:flex-row space-x-4
                                     px-4 sm:px-8  lg:px-64 mt-4 "> 
                <input type="text" name="" value={search} onChange={(e)=>{
                    setSearch(e.target.value)
                }} placeholder="dish/res" />
                <button className="text-2xl "  onClick={ ()=>{
                       const filteredRes=resList.filter(res=> res.info.name.toLowerCase().includes(search.toLowerCase()))
                        setFiltered(filteredRes)
                                          
                                            
                }}>Search</button>
            </div>

{/* top rated res */}
             <button onClick={()=>{
            setResList(resList.filter((res)=>
                    res.info.avgRating>4.1))
            console.log(resList)
        }}>TOP Rated res</button>
       <div className="text-3xl px-4 sm:px-8 md:px-64 py-4" >Top Restaurants in Bareilly</div>
        <div id="res-container" className="w-full flex flex-wrap justify-center gap-4
        px-4 sm:px-8  lg:px-64 mt-4">
            {
                filtered.map((restaurant,index)=> 
                    <Link to={"restaurant/"+restaurant.info.id}  key={restaurant.info.id}>
                <RestaurantCard resdata={restaurant}/>
                </Link>
                )
            }
        </div>
    </div>
 </>   
}

export default Body;


