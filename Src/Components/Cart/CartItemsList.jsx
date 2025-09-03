import { useDispatch, useSelector } from "react-redux";
import { RES_URL } from "../../Utils/Constants";
import { addItem, removeItem } from "../../Redux/cartSlice";
import { useState } from "react";
const CartItemsList=({items})=>{

    const [price,setPrice]=useState();

    const cartItems=useSelector((store)=>store.cart.items);
     const restaurant=useSelector((store)=>store.restaurant.res);
    //  const {resId}=restaurant[0]
   
     const resId=restaurant[0]?.restaurant?.id || 0;
     
    //  console.log(restaurant)
    // console.log(cartItems);
    
     const dispatch=useDispatch();

     const handleAddItem=(item,resId)=>{
        dispatch(addItem({item,resId}))
    };
    const handleRemoveItem=(item)=>{
      dispatch(removeItem(item))
    }
    
      return(
            <div className="w-full lg:w-[70%] xl:w-[50%] mx-auto" >
                {

                   items.map((item)=>{          
                      
                      return  <div key={item.card.info.id} className=" w-full flex flex-col-reverse md:flex-row my-4 mx-auto bg-white rounded-xl shadow-2xl  m-4">
                                       <div className="w-full md:w-2/3 p-2">
                                            <p className="font-bold text-slate-700 text-2xl">{item?.card?.info?.name}</p>
                                          <p>Rs {
                                          (item?.card?.info?.price/100|| item?.card?.info?.defaultPrice/100)
                                          *(cartItems.find(i=>i?.card?.info?.id===item?.card?.info?.id).quantity)                                          
                                          } </p>
                                          <div className=" flex break-all mt-4 text-slate-600 text-sm flex-wrap">{
                                            item?.card?.info?.description}
                                            </div>
                                         
                                        </div>
                                        <div className="w-full h-[90%] md:w-1/3 p-4  relative">
                                          <img className="rounded-xl   m-auto" src={RES_URL+item.card.info.imageId} alt="Image" />
                                          <div className="flex justify-center bg-yellow-500">
                                            
                                            <div className="bg-black  w-[30%] flex justify-between px-4 text-white p-2 rounded-xl absolute bottom-2">
                                                    <button className="hover:cursor-pointer" onClick={()=>handleRemoveItem(item)}> - </button>
                                                      {
                                                      cartItems.find(i=>i.card.info.id===item.card.info.id).quantity
                                                      }
                                                   <button className="hover:cursor-pointer" onClick={()=>handleAddItem(item,resId)}>+</button>
                                            </div>
                                
                                             
                                          </div>
                                          
                                        </div> 
    
                          </div>
                   })
                }


                           
                            
    
                          
                       </div>
        )
}

export default CartItemsList;