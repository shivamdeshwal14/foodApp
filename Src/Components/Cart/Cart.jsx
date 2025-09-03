import { useDispatch, useSelector } from "react-redux";
// import ItemsList from "../MenuComponents/ItemsList";
import CartItemsList from "./CartItemsList.jsx";
import { clearCart } from "../../Redux/cartSlice";
import { NavLink } from "react-router-dom";

const Cart=()=>{
    // const store=useSelector((store)=>store).
     const cartItems=useSelector((store)=>store.cart.items);
     const restaurant=useSelector((store)=>store.restaurant.res);
     const user=useSelector((store)=>store.user.userDetails)
    console.log(user);
    
 
    
     const dispatch=useDispatch();
     const handleClearCart=()=>{
        dispatch(clearCart())
     }
   
    const itemTotal=cartItems.reduce(function(sum,item){
        return sum+((item?.card?.info?.price ||item?.card?.info?.defaultPrice) *item?.quantity)
    },0);
   const deliveryCharge= (itemTotal/100)>=300 ? 0 : 50;
   
   const handlingCharge=10;
   const total=itemTotal/100+deliveryCharge+handlingCharge;
    
    return <div className="w-full  bg-slate-100">
       {cartItems.length!=0 && <div>
            <div className="text-center md:text-4xl p-2 flex justify-center ">Ordering From <p className="italic mx-4 font-bold ">{" "+restaurant[0].restaurant.name}</p></div> 
            <h1 className="text-center md:text-4xl p-2 font-bold ital"> Cart Items</h1>
        </div>}
         

            <div className=" w-full flex-col-reverse sm:flex-row ">
                 <div className="  ">
                    {cartItems.length===0 && <div className="lg:w-[70%] xl:w-[50%] mx-auto items-center  text-2xl w-full h-screen flex justify-center"> Empty Cart!! <br />
                    Add items to cart to place order !!</div>}
                    <CartItemsList items={cartItems}/>
                </div>
                {
                    cartItems.length!=0 &&
                    

                    <div className=" w-full lg:w-[70%] xl:w-[50%] flex flex-col justify-between md:flex-row mx-auto mb-4 shadow-2xl shadow-gray py-2 px-4 rounded-2xl">
                        <div className="w-full p-4">
                                 <h2 className="text-3xl">Billing </h2>
                                 <div className="text-xl py-2">
                                    <p >Item Total:  {itemTotal/100} Rs</p>
                                    <div className="flex italic ">Delivery Charges: {deliveryCharge>0 ? deliveryCharge :<p className="text-red-500">🎉Free Delivery</p>}</div>
                                    <p className="italic">Handling charge:{handlingCharge}</p>
                                    <p>Total: {total}</p>
                                    
                                  

                                 </div>
                        </div>  

              
                        {
                        user ?(
                         <div className="w-full p-4">
                            <p className="text-3xl py-2">Ordering for </p>
                            <p className="text-2xl italic">{user?.name}</p>
                            <p >Address:{user?.address}</p>
                            <p>Contact:{user?.contact}</p>
                              <button className="bg-black p-2 text-white rounded-xl text-xl mt-4 border border-red-600 hover:bg-white hover:text-black hover:shadow-2xl hover:cursor-pointer">Confirm Order</button>
                        </div>  
                        ):
                        (
                            <div className="w-full p-4">
                            
                               <p className="text-3xl py-2 text-red-500">Please Login to place Order !!</p> 
                                <NavLink to={"/login"}>

                                    <button className="bg-black text-white p-3 mt-4  px-5 rounded-2xl "> Login</button>
                                </NavLink>
                             </div>
                        )


                        }
                       
                   
                    
                  


                </div>
                }
              
           
        </div>
            
   
    
    </div>
}

export default Cart;