export const RES_URL="http://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RES_MENU="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=";



export const getResURLCollection=(lat,long,collection,tag="",offset=0)=>{
    return `https://www.swiggy.com/mapi/restaurants/list/v5?lat=${lat}&lng=${long}&collection=${collection}&tags=${tag}&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=null`;
}



