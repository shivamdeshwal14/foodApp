import RestaurantCard from "./RestaurantCard";

const Body=()=>{


 return<>
    <div id="body" className=" w-full ">
       
        <div id="res-container" className="w-full flex flex-wrap justify-center gap-4
        px-4 sm:px-8  lg:px-64 mt-4">
            <RestaurantCard name="KFC"
            cuisine="NorthIndia"/>
            <RestaurantCard name="Swaad" cuisine="south Indian"/>
            <RestaurantCard name="Momo Hut" cuisine="Chinese"/>
            <RestaurantCard name="Burgasta" cuisine="Italian"/>
            <RestaurantCard name="Roofyard" cuisine="restro"/>
            <RestaurantCard name="midtown" cuisine="Indian"/>
            <RestaurantCard name="Satkar" cuisine="ALL"/>
            <RestaurantCard name="Boston" cuisine="Bakery"/>
           
           

        </div>



    </div>
 </>   
}

export default Body;



//  <div id="search-bar  " className="flex gap-4 space-x-4 px-64 py-8 bg-blue-100">
//         <div >Search</div>
//         <input type="text" name="" id="" placeholder="Enter res/dish" />
//         </div>