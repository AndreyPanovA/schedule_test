import React from "react"
import cls from "./style.module.scss"

import {Switch} from 'antd';
const Switcher = ({id="switch-shadow", checked, vm})=> {
    function onChange(checked) {
        console.log(`switch to ${checked}`);
        vm.setState((prev)=> {
            const obj = {...prev, accordionItems:[{...prev.accordionItems[0],isSelected:checked}]}
        })
        vm.props.setState(prev=> {
            const obj={...prev,[id]:vm.state}

            let newObj={...prev,[id]:vm.state.accordionItems[0]}
            

            // Object.keys(vm.state.accordionItems[0]).forEach(el=>{
            //     console.log("el:", el)
            //     // if(el==1) {
            //     //     newObj[id]={

            //     //     }
            //     // }
            // })
            if(!checked) {
                delete newObj[id]
            }
            return newObj
        })
        
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