import React from "react"
import cls from "./style.module.scss"
import { useState } from "react"
import {v4} from 'uuid';

const Btn = ({title="Сохранить результаты", onPress, vm,idx,dayId})=> {
    const [press, setPress]=useState(false)
    const id=v4()
    const callbacks={
        onClick:async ()=> {
            setPress(prev=>!prev)
            await vm.setState((prev)=> {
                const obj={...prev, accordionItems:[{...prev.accordionItems[0], [idx]:{
                    ...prev.accordionItems?.[0]?.[idx],
                    isSelected:true
                }}]}
                if (prev.accordionItems[0][idx]?.isSelected) {
                    obj.accordionItems[0][idx].isSelected=false
                }
                return obj
            })
            vm.props.setState(prev=> {
                let newObj={...prev, [dayId]:vm.state.accordionItems[0]}
                let renderObj={...newObj, [dayId]:{...vm.state.accordionItems[0]}}
                for (let key in vm.state.accordionItems[0]) {
                    for (let innerKey in vm.state.accordionItems[0][key]) {
                        if (innerKey=="isSelected" && vm.state.accordionItems[0][key][innerKey]) {
                            renderObj={...renderObj,[dayId]:{...renderObj[dayId],[key]:vm.state.accordionItems[0][key]}}
                        }
                        else {
                            renderObj={...renderObj,[dayId]:{...renderObj[dayId],[key]:false}}
                        }
                    }
                }
                return renderObj
            })
            if(onPress) {
                onPress()
            }
        }
    }
    return (
        <label for={id} className={cls["btn-label"]}>
            <button id={id} className={  vm.state.accordionItems[0][idx]?.isSelected ? cls["btn-container"]+ " "+cls["active"]: cls["btn-container"]} onClick={callbacks.onClick}>
            
            </button>
           <p>{title}</p>
        </label>
    )
}
export default Btn