import React from "react"
import cls from "./style.module.scss"
const Switch = ({id="switch-shadow", checked})=> {
    return (
        <div className={cls["switch__container"]}>
            <input id={id} className={cls.switch +" "+  cls["switch--shadow"]} type="checkbox"/>
            <label for={id}></label>
        </div>
    )
}
export default Switch