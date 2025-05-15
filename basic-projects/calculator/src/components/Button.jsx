import styles from "./Button.module.css"
const Button=()=>{
    const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
return (<div class={styles.btn}>
    {buttonNames.map(buttonNames=> <button className={styles.button}>{buttonNames}</button>)}
       
      </div> )
}
export default Button