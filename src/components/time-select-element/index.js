import React,{ useState } from "react"
import Icon,{PlusCircleOutlined,CloseCircleOutlined} from '@ant-design/icons';
import Btn from "../btn";
import cls from "./style.module.scss"
import TimePickerComponent from "../time-picker"
import {v4} from 'uuid';
const TimeSelectElement=({title,onAddItem, state, setState, vm, idx, dayId})=> {
    const [timeCount, setTimeCount]=useState({[v4()]:{
        time:""
    }})
    const callbacks={
        onAddItem:(id)=> {
            setTimeCount((prev)=>{
                const newArr = {...prev, [id]:{time:""}}
                return newArr
            })
         
        },
        onDelItem:(id)=> {
            setTimeCount((prev)=>{
                const obj={...prev}
                if (obj[id]) {
                    delete obj[id]
                }
                return obj
            })
        }
    }

    return (
        <div className={cls.container}>
            <Btn title={title} onPress={()=>console.log("ttt")} vm={vm} idx={idx}/>
            <div className={cls.addItem}>
                <div>
                    {Object.keys(timeCount).map((id, index)=> {    
                        return (
                        <div className={cls.timeItem} key={id}>
                            <TimePickerComponent {...{state, setState}} onChange={(time)=>{
                                setTimeCount((prev)=> {
                                    const newArr = {...prev}
                                    newArr[id]={time}
                                    return newArr
                                })
                                vm.setState(prev=> {
                                    const obj={...prev, accordionItems:[{...prev.accordionItems[0], [idx]:{
                                        time:{
                                        ...prev.accordionItems[0]?.[idx]?.time,
                                        [id]:{time}
                                    }} }]}
                                   
                                    return obj
                                })
                            }} />
                              <div className={cls.plus} onClick={callbacks.onDelItem.bind(this, id)}>
                                <CloseCircleOutlined />
                             </div>
                        </div>
                    )})} 
                </div>
                <div className={cls.plus} onClick={callbacks.onAddItem.bind(this, v4())}>
                    <PlusCircleOutlined/>
                </div>
            </div>
        </div>
      
    )
}
export default TimeSelectElement
