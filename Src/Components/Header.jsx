import { useState } from 'react';
import '../../index.css'
const Header=()=>{
const[btnName,setBtn]=useState("Login");


    return<>
            <div id="header" className='w-full bg-red-500 flex flex-col sm:flex-row py-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 border border-2'>
                <div className='w-1/2 max-h-fit flex'>                  
                    <div className='text-2xl text-white'>address:Bareilly</div>
                </div>
                <div className='w-full sm:w-1/2  flex sm:justify-end mt-4 sm:mt-0'>
                <nav  className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-white text-2xl'>
                     <a href="">Search</a>
                        <a href="">offers</a>
                        <a href="">Help</a>
                        <button className='' onClick={()=>{
                        btnName=== "Login"?setBtn("Logout"):setBtn("Login");     
                        }}>{btnName}</button>
                        
                </nav>               </div>

            </div>
    </>
}

export default Header;