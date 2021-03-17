import React from "react"
import cls from "./style.module.scss"
import { useState } from "react"
import {v4} from 'uuid';

const Btn = ({title="Сохранить результаты", onPress, vm,idx})=> {
    const [press, setPress]=useState(false)
    const id=v4()
    const callbacks={
        onClick:()=> {
            console.log("dssd", vm.state)

            setPress(prev=>!prev)
            // onClick
            vm.setState((prev)=> {
                const obj={...prev, accordionItems:[{...prev.accordionItems[0], [idx]:{
                    ...prev.accordionItems?.[0]?.[idx],
                    isSelected:true
                }}]}
                if (prev.accordionItems[0][idx]?.isSelected) {
                    obj.accordionItems[0][idx].isSelected=false
                }
                return obj
            })
            // console.log("JSON", vm.state)
            if(onPress) {
                onPress()
            }
            // onClick()
        }
    }
    // console.log("ddd", vm.state)
 

    return (
        <label for={id} className={cls["btn-label"]}>
            <button id={id} className={  press ? cls["btn-container"]+ " "+cls["active"]: cls["btn-container"]} onClick={callbacks.onClick}>
            
            </button>
           <p>{title}</p>
        </label>
    )
}
export default Btn