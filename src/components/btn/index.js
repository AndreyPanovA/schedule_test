import React from "react"
import cls from "./style.module.scss"
import { useState } from "react"
import {v4} from 'uuid';

const Btn = ({title="Сохранить результаты", onPress})=> {
    const [press, setPress]=useState(false)
    const id=v4()
    const callbacks={
        onClick:()=> {

            setPress(prev=>!prev)
            // onClick
            if(onPress) {
                onPress()
            }
            // onClick()
        }
    }
    return (
        <label for={id} className={cls["btn-label"]}>
            <button id={id} className={  press ? cls["btn-container"]+ " "+cls["active"]: cls["btn-container"]} onClick={callbacks.onClick}>
            
            </button>
           <p>{title}</p>
        </label>
    )
}
export default Btn