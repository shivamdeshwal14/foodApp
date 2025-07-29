import { RES_URL } from "../Utils/Constants";

const RestaurantCard=(props)=>{
       
    const {name,avgRating,cuisines,locality}=props.resdata.info;
    const {slaString}=props.resdata.info.sla

    
    return<>
     <div id="res-card" className="min-h-68 w-56 rounded-xl hover:border-1  hover:cursor-pointer">
        <img src={RES_URL}
        className="rounded-xl h-42 w-full"
        alt="" />
        <p className="text-xl ">{name}</p>
        <p className="">{avgRating+" stars"+"   "+slaString}</p>
        <p className="text-slate-500">{cuisines.join(',')}</p>  
        <p className="text-slate-500">{locality}</p>  
     </div>
    </>
}

export default RestaurantCard;