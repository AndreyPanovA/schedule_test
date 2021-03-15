import React from "react"
import cls from "./style.module.scss"
const Btn = ({title="Сохранить результаты", onClick})=> {
    return (
        <div className={cls["btn-container"]} onClick={onClick}>
            {/* <p>{title}</p> */}
        </div>
    )
}
export default Btn