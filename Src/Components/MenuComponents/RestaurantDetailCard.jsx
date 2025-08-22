const RestaurantDetailCard=({resDetails})=>{
    const {name,avgRating,locality,costForTwoMessage}=resDetails
    const cuisines=resDetails.labels[2].message;
 
     
    
        


    return(
        <div className=" w-full  mx-auto">
             <h1 className="text-xl lg:text-4xl  p-4 font-bold">{name}</h1>
            <div className="border-1 shadow-gray-600 min-h-content rounded-xl p-4 mt-2">
                    <p className="font-bold">{avgRating}(8.3k+ rating) .{costForTwoMessage}</p>
                    <p className="text-red-500 ">{cuisines}</p>
                    <p>outlet . {locality}</p>
                    <p>30-45 min</p>
            </div>
           
        </div>
    )
}

export default RestaurantDetailCard;