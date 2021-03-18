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
            // vm.props.setState(prev=> {
            //     // const obj={...prev,[dayId]:vm.state}
            //     let newObj={...prev,[dayId]:vm.state.accordionItems[0]}
            //     if (!vm.state.accordionItems[0]?.[idx]?.isSelected) {
            //         // console.log("hire:", vm.state.accordionItems[0]?.[idx]?.isSelected)
            //         delete newObj[dayId][idx]
            //     }
            //     // if(!checked) {
            //     //     delete newObj[dayId]
            //     // }
               
            //     return newObj
            //     // console.log(vm.state.accordionItems[0])
            //     return {...prev}
            // })
            vm.props.setState(prev=> {
                let newObj={...prev, [dayId]:vm.state.accordionItems[0]}
                let renderObj={...newObj, [dayId]:{...vm.state.accordionItems[0]}}
                for (let key in vm.state.accordionItems[0]) {
                    // console.log("vm.state.accordionItems[0][key]",vm.state.accordionItems[0][key])
                    for (let innerKey in vm.state.accordionItems[0][key]) {
                     
                        if (innerKey=="isSelected" && vm.state.accordionItems[0][key][innerKey]) {
                           
                            renderObj={...renderObj,[dayId]:{...renderObj[dayId],[key]:vm.state.accordionItems[0][key]}}
                           
                            // renderObj[dayId]={...renderObj[dayId],[key]:vm.state.accordionItems[0][key]}   
                           
                        }
                        else {
                        // (key=="isSelected" && !vm.state.accordionItems[0][key][innerKey]) {
                        // renderObj[dayId]={...renderObj[dayId],[key]:false}
                        // console.log("fucker",renderObj)
                        console.log("render", renderObj)
                        renderObj={...renderObj,[dayId]:{...renderObj[dayId],[key]:false}}
                    }
                    }
                  
                    // else if(key=="isSelected" && !vm.state.accordionItems[0][key]) {
                    //     renderObj[dayId]={...renderObj[dayId],[key]:false}
                    // }
                }
                // if (!vm.state.accordionItems[0]?.[idx]?.isSelected) {
                    
                //     return {...newObj, [dayId]:{...vm.state.accordionItems[0],[idx]:false}}
                // }
                return renderObj
                // return newObj
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