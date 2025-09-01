import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log("error page",err);
    
    return <>
        <div className="w-full p-32 gap-8  h-screen">

            <h2 className=" text-center p-8 text-3xl md:text-4xl text-red-500 font-bold">Something Went Wrong</h2>
             <h2 className="text-center p-4">{err.data}</h2>
            <h2 className="text-center p-4  ">{err.status}</h2>

        </div>
       
    </>
}

export default Error;