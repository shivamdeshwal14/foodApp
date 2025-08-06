import { RES_URL } from "../Utils/Constants";

    const MenuItem=(props)=>{
        // console.log(props.menuItems.card.info);
        const item=props.menuItems.card.info;
        console.log(item);
    
    
    return<>
        <div className="mt-4 mb-4">

        
        <div className=" border-slate-500 border-b-1 flex flex-col-reverse md:flex-row-  p-2  ">
                    <div className="w-3/4 ">               
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <p className="text-black">rs {item.defaultPrice/100}</p>
                    <p className="text-slate-600">{item.description}</p>
                    </div>

                    <div className="w-1/4 rounded-xl">
                        <img className="rounded-xl" src={RES_URL+item.imageId} alt="Image" />
                    </div>
        </div>

    </div>
    </>
}

export default MenuItem;