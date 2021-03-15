import React from "react"
import TimePicker from 'react-time-picker'
import Btn from "../btn";
import cls from "./style.module.scss"
const TimeSelectElement=(props)=> {
    return (
        <div className={cls.container}>
            <Btn />
        </div>
      
    )
}
export default TimeSelectElement