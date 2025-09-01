import { useDispatch, useSelector } from "react-redux";
// import ItemsList from "../MenuComponents/ItemsList";
import CartItemsList from "./CartItemsList.jsx";
import { clearCart } from "../../Redux/cartSlice";

const Cart=()=>{
     const cartItems=useSelector((store)=>store.cart.items);
     const restaurant=useSelector((store)=>store.restaurant.res);


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
            <div className="text-center md:text-4xl p-2 flex justify-center font-bold">Ordering From <p className="italic ">{" "+restaurant[0].restaurant.name}</p></div> 
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

                    <div className=" w-full lg:w-[70%] xl:w-[50%] mx-auto mb-4 shadow-2xl shadow-gray py-2 px-4 rounded-2xl">
                    <h2 className="text-3xl">Billing </h2>
                    <div className="text-xl py-2">
                    <p >Item Total:  {itemTotal/100} Rs</p>
                    <div className="flex italic ">Delivery Charges: {deliveryCharge>0 ? deliveryCharge :<p className="text-red-500">🎉Free Delivery</p>}</div>
                    <p className="italic">Handling charge:{handlingCharge}</p>
                    <p>Total: {total}</p>

                    </div>
                    
                   
                    <button className="bg-black p-2 text-white rounded-xl text-xl mt-4">Confirm Order</button>


                </div>
                }
              
           
        </div>
            
   
    
    </div>
}

export default Cart;