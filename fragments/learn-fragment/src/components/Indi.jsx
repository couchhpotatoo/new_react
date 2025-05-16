import styles from "./Indi.module.css"
const Indi=(props)=>{
return(<>
    <li  className={`${styles["kg-item"]}list-group-item`}>{props.item}</li>
    
    <button className={`${styles.button} btn btn-info`}
     onClick={()=>console.log(`${props.item} button clicked`)}
     >
        Buy</button>
   
    </>
)
}
export default Indi