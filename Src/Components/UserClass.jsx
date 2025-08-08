import React from "react"

class UserClass extends React.Component{
   
        constructor(props){
        super(props); //pass props to parent class
       console.log("constructor called");
       this.state={
        userInfo:{
        name:"Shivam",
        Location:"Default",
        avatar_url:"Dummy"
        }
       
       }
        
       
        
        
        
    }

    render(){    
       console.log("render called");
            
               return <div className="w-full flex flex-wrap justify-center gap-4
                    px-4 sm:px-8  lg:px-64 mt-4">
                        <div className="min-h-68 w-1/2 flex flex-col  items-center rounded-xl border-1
                        py-16">
                                <img src={this.state.userInfo.avatar_url} alt="Dummy" className="rounded-xl h-64
                                w-64" />
                               <h2>Name:{this.state.userInfo.name}</h2>
                            <h3>Location:{this.state.userInfo.location}</h3>
                            <h4>contact: Shivam@gmail.com</h4>
                        
                        </div>
                    
                </div>
    }
   
    async componentDidMount(){
        
         console.log("did mount");

         const res=await fetch('https://api.github.com/users/shivamdeshwal14');
         const data=await res.json();
         console.log(data);
         this.setState({
            userInfo:data
         })
         
         console.log("API FETCHED");
         
     
    
 }

 componentDidUpdate(){
    console.log("is component updated");
    
 }
 componentWillUnmount(){
    console.log("UNMOUNT");
    
 }

}
export default UserClass;