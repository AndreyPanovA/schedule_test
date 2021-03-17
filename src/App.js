
import React, {useState} from "react"
import './App.scss';
import {Accordion,Btn,TimePickerComponent} from "./components"


function App() {
  const [state, setState]=useState({})
  const [showJSON, setShowJSON]=useState(false)
  const places=[{id:1, title:"В москве"},{id:2,title:"Студия на Академической"},{id:3,title:"Перерыв"}]
  const weekArr=[{id:10, title:"Понедельник", content:places}, {id:20,title:"Вторник",content:places},{id:30,title:"Среда",content:places},{id:40,title:"Четверг",content:places},{id:50,title:"Пятница",content:places},{id:60,title:"Суббота",content:places},{id:70,title:"Воскресенье",content:places}]
	return (
        <>
          {weekArr.map((el,idx)=> {
            return <Accordion data={[el]} idx={el.id}  state={state} setState={setState} />
          })}
        
          <div class="col-md-3 col-sm-3 col-xs-6"  onClick={()=>{setShowJSON(true)}}>
            <p href="#" class="animated-button thar-three">Сохранить результаты</p> 
          </div>
          {showJSON &&  <div style={{margin:"auto"}}>
            <div style={{borderLeft:"2px solid lime", padding:"20px"}}>
              <pre style={{color:"white", textAlign:"justify"}}>{JSON.stringify(state, null, 2)}</pre>
            </div>
          </div>}
         
          {/* <Btn onPress={()=>alert("results")}/> */}
        </>
  );
}

export default App;
