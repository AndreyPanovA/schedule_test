import React from "react"
import cls from "./style.module.scss"

import {Switch} from 'antd';
const Switcher = ({id="switch-shadow", checked, vm})=> {
    function onChange(checked) {
        console.log(`switch to ${checked}`);
        console.log(JSON.stringify(vm.state, null, 2))
   
        
      }
    return (
        <div className={cls["switch__container"]}>
            {/* <input id={id} className={cls.switch +" "+  cls["switch--shadow"]} type="checkbox"  onChange={(e)=>{ console.log(e.target)}}/>
            <label for={id}></label> */}
            <Switch onChange={onChange}/>
        </div>
    )
}
export default Switcher