import { IoFolder } from "react-icons/io5";
import Indi from "./Indi";
const Items=({foodItem})=>{

  

    return(
        <>
         <ul className="list-group">
 {foodItem.map((item)=>( <Indi key={foodItem} item={item}></Indi>))}
 
</ul>

        </>
    )
}
export default Items;