import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
    import { useParams } from "react-router-dom";
import { RES_MENU } from "../Utils/Constants";

    const RestaurantMenu=()=>{
    const {resId}=useParams();
    
    const[resInfo,setResInfo]=useState(null );
    const[menu,setMenu]=useState([]);
    //  console.log(menu);
     
    const fetchMenu=async ()=>{
        const res=await fetch(RES_MENU+resId+'&catalog_qa=undefined&query=belgian%20waffle&submitAction=ENTER');
        const data= await res.json();
        // setResInfo(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setResInfo(data);
        //some errror is there in setting data some issues are there will see it later
        // console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        // setMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards)
        
        console.log(data.data)
       


        // data.data.cards[2].card.card.info this path of data contains info about  restaurant  till menu(before menu )
        // search dishes se upar wala isme hai. 

        // console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);        
    }
    
    useEffect(()=>{
        fetchMenu();
        
    },[])


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