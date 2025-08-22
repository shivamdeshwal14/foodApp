import { useState } from "react";
import ItemsList from "./ItemsList";

const MenuCategory=(props)=>{
    console.log(props);
    const {title,itemCards}=props.category.card.card
    const itemLength=props.category.card.card.itemCards.length;
    const[showItems,setShowItems]=useState(false);

    const handleclick=()=>{
      
        setShowItems(!showItems);
      
        
        
    }

    
    
    // in this component i am getting categories like recommneded ,thalis,etcs
    // now in component i ll be calling items list for each category simply i find
    // itemlist and call items using map to show all items


    return(
            <div className="border-b-12 border-gray-200 hover:cursor-pointer" onClick={handleclick}>
                <div className="flex w-full justify-between">
                    <p className=" text-xl font-bold my-2 p-2 " >{title} ({itemLength})</p>
                   <span className=" my-2 p-2">⬇️</span>
                </div>
                   
                    
                  {showItems && <ItemsList  items={itemCards}/>

                  }  
                        
                


            </div>


    );
}

export default MenuCategory;