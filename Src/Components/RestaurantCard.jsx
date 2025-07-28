const RestaurantCard=(props)=>{
    const name=props.name;
    const cuisine=props.cuisine;
    return<>
     <div id="res-card" className="h-68 w-56 rounded-xl hover:border-1  hover:cursor-pointer">
        <img src="http://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/29c9fed3-4d46-492e-b775-a3224db3c7df_669715.JPG"
        className="rounded-xl h-42 w-full"
        alt="" />
        <p className="text-xl ">{name}</p>
        <p className="">4.3 Star. 15-20 mins</p>
        <p className="text-slate-500">{cuisine}</p>
     </div>
    </>
}

export default RestaurantCard;