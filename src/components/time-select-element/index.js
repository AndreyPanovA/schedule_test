import React from "react"
import TimePicker from 'react-time-picker'
import Btn from "../btn";
import cls from "./style.module.scss"
const TimeSelectElement=({title})=> {
    return (
        <div className={cls.container}>
            <Btn title={title} />
        </div>
      
    )
}
export default TimeSelectElement