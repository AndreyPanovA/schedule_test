import React from "react"
import cls from "./style.module.scss"
const SaveResultsBtn = ({title="Сохранить результаты", onClick })=> {
    return (
     
        <div className={cls["container"]} onClick={onClick}>
            <div className={cls["btn"]}><p href="">{title}</p></div>
        </div>
    )
}
export default SaveResultsBtn