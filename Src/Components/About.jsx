// // class based component

import React from "react";
import UserClass from "./UserClass";
class About extends React.Component{
 constructor(){
    super();
  //     console.log("Parent const");
       
 }


 render(){
    //console.log("Parent render");
    
      return<>
    <div className="w-full flex flex-wrap justify-center gap-4
        px-4 sm:px-8  lg:px-64 mt-4">
                  <h1 className="text-3xl text-blue-800">This is About Page of Shivam Deshwal</h1>
     </div>
       
     <UserClass name="1-Shivam-Deshwal" location="Gurugram"/>
     </>

 }

 
componentDidMount(){
   // console.log("Parent mounted");
    
}

}
export default About;
