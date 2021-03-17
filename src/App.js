
import React, {useState} from "react"
import './App.scss';
import {Accordion,Btn,TimePickerComponent} from "./components"
import {weekArr} from "./data"

function App() {
  const [state, setState]=useState({})
  const [showJSON, setShowJSON]=useState(false)
	return (
        <>
          {weekArr.map((el,idx)=> {
            return <Accordion data={[el]} idx={el.id}  state={state} setState={setState} />
          })}
        
          <div class="col-md-3 col-sm-3 col-xs-6"  onClick={()=>{
            setShowJSON(true)
            setState((prev)=> {
              console.log(prev)
              return {...prev}
            })
          }}>
            <p href="#" class="animated-button thar-three">Сохранить результаты</p> 
          </div>
          {showJSON &&  <div style={{margin:"auto"}}>
            <div style={{borderLeft:"2px solid lime", padding:"20px"}}>
              <pre style={{color:"white", textAlign:"justify"}}>{JSON.stringify(state, null, 2)}</pre>
            </div>
          </div>}
        </>
  );
}

export default App;
