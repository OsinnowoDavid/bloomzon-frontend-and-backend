import React from "react";
import classes from './assest/Aminlogin.module.css'

const TextFielD = ({lable,Inputprops,onChange,value}) =>{
    return (
        <div>
            <lable >{lable}
            </lable>
            <input className={classes.userbox} {...Inputprops} onChange={onChange} value={value}  />
            
        </div>
    )
}
export default TextFielD