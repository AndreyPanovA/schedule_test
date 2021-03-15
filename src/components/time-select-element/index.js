import React,{ useState } from "react"
import TimePicker from 'react-time-picker'
// import {Timepicker} from 'react-timepicker';
// import 'react-timepicker/timepicker.css'
import Btn from "../btn";
import cls from "./style.module.scss"
const TimeSelectElement=({title})=> {
    const [value, onChange] = useState('10:00');
    return (
        <div className={cls.container}>
            <Btn title={title} />
            {/* <TimePicker
        onChange={onChange}
        value={value}
      /> */}
    
        </div>
      
    )
}
export default TimeSelectElement