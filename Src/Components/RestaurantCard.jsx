import { RES_URL } from "../Utils/Constants";

const RestaurantCard=(props)=>{
    
    // ye wala live api me kaam krrha tha abhi  dummy wale k lie niche wala h 
    // const {name,avgRating,cuisines,locality,sla,cloudinaryImageId}=props.resdata.card.card.info;
    
        const {name,avgRating,cuisines,locality,sla,cloudinaryImageId}=props.resdata?.info;



return<>
     <div id="res-card" className="min-h-80 w-74 rounded-xl bg-white hover:shadow-xl  hover:cursor-pointer
     hover:scale-98
     transition-transform duration-300 ease-in-out
     ">
        <img src={RES_URL+cloudinaryImageId}
        className="rounded-xl h-64 w-full"
        alt="" />
        <div className="py-4 px-2 space-y-2">
        <p className="text-2xl ">{name.slice(0,18)}</p>
        <p className="">*️⃣ {avgRating+" stars"+"   "+sla.slaString }</p>
        <p className="text-slate-500 text-xl max-w-full break-all">{cuisines.join(',').slice(0,20)+".."}</p>  
        <p className="text-slate-500 text-xl">📍 {locality}</p>  
        </div>
        
     </div>
    </>
}



export const withPromotedLabel=(RestaurantCard)=>{



    return (props)=>{
        return (
            <div>

            <label>Promoted</label>
            <RestaurantCard {...props}/>
            
            </div>
        );
     };
}



export default RestaurantCard;