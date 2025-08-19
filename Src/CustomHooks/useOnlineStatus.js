import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);
    // check if we are online or not using event listener

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });


         window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[])


    return onlineStatus;
}


export default useOnlineStatus;