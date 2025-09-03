import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [isLogin,setIsLogin]=useState("");
    const navigate=useNavigate();

    const User=useSelector((store)=>store.user.userDetails)
    console.log(User);
    
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
        setIsLogin("✅ Logged In Successfully")

    }
    else{
       alert(data.message)
    }
    console.log(data);
        } catch (error) {
            console.log(error)
        }
        
    
    }
  
    useEffect(()=>{
        if(isLogin){
            const timer=setTimeout(()=>{
                navigate("/")
            },1000);

            return ()=>clearTimeout(timer);
        }

    },[isLogin,navigate])

    

    return <div className="w-full px-4 my-12">

    {/* if login succesfullly then render this div */}

    {
        isLogin  ?(   <div className="w-full  md:w-[70%] lg:w-1/3 mx-auto flex flex-col gap-4 bg-slate-200 rounded-4xl py-16 border border-red-500">
            <p className="text-center text-xl "> {isLogin} </p>
            <p className="text-center">Redirecting to Home ...</p>
            </div>):
            
            
            
            
            // user not logged in render login page
            (
                     <div className="w-full  md:w-[70%] lg:w-1/3 mx-auto flex flex-col gap-4 bg-slate-200 rounded-4xl py-16">
                <h2 className="text-4xl font-bold p-4 text-center w-full md:w-1/2 mx-auto text-red-500">Login</h2>
                <p className="text-xl w-full md:w-2/3 mx-auto ">Enter your email</p>
                <input type="email" className="border b-2 w-full md:w-2/3  mx-auto rounded-2xl p-3 bg-white" id="email"  placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                
                
                <p className="text-xl w-full md:w-2/3 mx-auto ">Enter password</p>
                <input className="shadow-2xl shadow-white/30 w-full md:w-2/3 mx-auto rounded-2xl p-3 bg-white" type="text" placeholder="Enter Password"
                
                value={password}
                onChange={(e)=>setPassword(e.target.value)}

                />
                <button className="bg-black  text-white p-4 text-xl w-1/2 mx-auto rounded-3xl mt-8 hover:bg-blue-600"
                    onClick={handleLogin}
                >Login</button>
            </div>

            )

    }


             
    </div>
}

export default Login;