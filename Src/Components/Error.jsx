import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log("error page",err);
    
    return <>
        <div>OOPS! Path not found</div>
        <h2>{err.data}</h2>
        <h2>{err.status}</h2>
    </>
}

export default Error;