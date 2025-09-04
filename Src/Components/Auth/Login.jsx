import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { clearCart, removeItem } from "../../Redux/cartSlice";

const Login=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [justLogin,setJustLogin]=useState(false);
    const navigate=useNavigate();

    const User=useSelector((store)=>store.user.userDetails)
  
    
    const dispatch=useDispatch();
    
    
    const addUserDataToRedux=(item)=>{
        dispatch(addUser(item));
    }
    
    
    const handleLogin= async()=>{
        try {
            const apidata=await fetch('http://localhost:5001/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password
            })

        });

    const data=await apidata.json();
    if(data.success===true && data.message==='Login Successfull'){
       
        addUserDataToRedux(data.user)       //added user details to redux store
        setJustLogin(true)
        // setIsLogin("✅ Logged In Successfully")

    }
    else{
       alert(data.message)
    }
  
        } catch (error) {
            console.log(error)
        }
        
    
    }

    const handleLogout=()=>{
        // setIsLogin("");
        dispatch(removeUser())
        dispatch(clearCart());
        navigate('/login')

    }
  
    useEffect(()=>{
        if(justLogin){
            const timer=setTimeout(()=>{
                navigate("/")
                // alert('User already')
            },3000);

            return ()=>clearTimeout(timer);
        }

    },[justLogin,navigate])

    

    return <div className="w-full px-4 my-12">

    {/* if login succesfullly then render this div */}

    {
        User  ? (
                <div className="w-full  md:w-[70%]  lg:w-1/3 mx-auto flex flex-col gap-4 bg-black rounded-4xl py-16 shadow-2xl ">
                {justLogin && <p className="text-white text-center">Redirecting to Home Page...</p>}
                <h2 className="text-4xl font-bold p-4 text-center w-full  mx-auto text-red-500 italic">Welcome {User.name}</h2>

                <div className="mt3 text-white flex flex-col  justify-center p-8  gap-4 mx-auto rounded-3xl h-64 
                ">
                    <p className="text-xl"> Contact Number: {User.contact}</p>
                    <p className="text-xl break-all">Email: {User.email}</p>
                    <p className="text-xl"> Address: {User.address}</p>
                </div>
               
                
                <button className="bg-slate-200 text-black   p-4 text-xl w-1/2 mx-auto rounded-3xl mt-8 hover:drop-shadow-2xl hover:drop-shadow-white/10"
                onClick={handleLogout}
                   
                >LogOut</button>
            </div>

            )
            :
            
            
            
            
            // user not logged in render login page
            (
                     <div className="w-full  md:w-[70%] lg:w-[40%] mx-auto flex flex-col gap-4 bg-black rounded-4xl py-16 shadow-2xl text-white">
                <h2 className="text-4xl font-bold p-4 text-center w-full md:w-1/2 mx-auto text-red-500">Login</h2>
                <p className="text-xl w-full md:w-2/3 mx-auto ">Enter your email</p>
                <input type="email" className="border b-2 w-full md:w-2/3 text-black  mx-auto rounded-2xl p-3 bg-white" id="email"  placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                
                
                <p className="text-xl w-full md:w-2/3 mx-auto ">Enter password</p>
                <input className="shadow-2xl shadow-white/30 w-full md:w-2/3 mx-auto rounded-2xl text-black p-3 bg-white" type="text" placeholder="Enter Password"
                
                value={password}
                onChange={(e)=>setPassword(e.target.value)}

                />
                <button className="bg-slate-200 text-black  p-4 text-xl w-1/2 mx-auto rounded-3xl mt-8 hover:drop-shadow-2xl hover:drop-shadow-white/10"
                    onClick={handleLogin}
                >Login</button>
            </div>

            )

    }


             
    </div>
}

export default Login;