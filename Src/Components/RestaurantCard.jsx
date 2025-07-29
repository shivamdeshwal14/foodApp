import { RES_URL } from "../Utils/Constants";

const RestaurantCard=(props)=>{
    const {name,rating,cuisine}=props.resdata;

    
    return<>
     <div id="res-card" className="h-68 w-56 rounded-xl hover:border-1  hover:cursor-pointer">
        <img src={RES_URL}
        className="rounded-xl h-42 w-full"
        alt="" />
        <p className="text-xl ">{name}</p>
        <p className="">{rating+" stars"}</p>
        <p className="text-slate-500">{cuisine}</p>
     </div>
    </>
}

export default RestaurantCard;