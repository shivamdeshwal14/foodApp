import { useEffect, useState } from "react";
import { RES_MENU } from "../Utils/Constants";
const useRestaurantMenu=(resId)=>{

    const[resInfo,setResInfo]=useState(null);
    //fetch data
    useEffect(()=>{ 
        fetchData();
    },[resId])

    const fetchData=async ()=>{
        const res=await fetch(RES_MENU+resId+'&catalog_qa=undefined&query=belgian%20waffle&submitAction=ENTER');
        const data= await res.json();
        setResInfo(data);
    }
    return resInfo;

}

export default useRestaurantMenu;