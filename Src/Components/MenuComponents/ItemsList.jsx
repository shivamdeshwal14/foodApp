import { RES_URL } from "../../Utils/Constants";

const ItemsList=({items})=>{
    // const{name,description,price,imageId}=props.itemsData.card.info;


   
    
    return(
        <div >
                       
            {
               items.map((item)=>{               
                  return  <div key={item.card.info.id} className=" w-full flex flex-col-reverse md:flex-row my-4 mx-auto border-b-2 border-gray-400 m-4">
                                   <div className="w-full md:w-2/3 p-2">
                                        <p className="font-bold text-slate-700 text-2xl">{item.card.info.name}</p>
                                      <p>Rs {item.card.info.price/100 || item.card.info.defaultPrice/100} </p>
                                      
                                      <p className="text-slate-600 w-[90%] breaks-word whitespace-normal text-justify ">{
                                        item.card.info.description
                                        }</p>
                                    </div>
                                    <div className="w-full md:w-1/3 p-2">
                                      <img className="rounded-xl h-[70%]" src={RES_URL+item.card.info.imageId} alt="Image" />
                                    </div> 

                      </div>
               })
            }
                       
                        

                      
                   </div>
    )
}

export default ItemsList;

