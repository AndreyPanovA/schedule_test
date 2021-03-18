
import React, {useState} from "react"
import './App.scss';
import {Accordion,Btn,TimePickerComponent,SaveResultsBtn} from "./components"
import {weekArr} from "./data"
import {CUSTOM} from "../src/constants"

function App() {
  const [state, setState]=useState({})
  const [showJSON, setShowJSON]=useState(false)
  const callbacks={
    onSaveResults:()=>{
      setShowJSON(true)
      setState((prev)=> {
        return {...prev}
      })
    }
  }
	return (
        <>
          {weekArr.map((el,idx)=> {
            return <Accordion data={[el]} idx={el.id}  state={state} setState={setState} />
          })}
        <a href="/images" download>
        <pre style={{color:"white", textAlign:"justify"}}>{JSON.stringify(state, null, 2)}</pre>
      </a>
          <div className="save-btn-container">
            <SaveResultsBtn onClick={callbacks.onSaveResults} title="Показать JSON" />
          </div>
          {showJSON &&  <div style={{margin:"auto"}}>
            <div style={{borderLeft:"5px solid #1eff45", padding:"20px"}}>
              <pre style={{color:"white", textAlign:"justify"}}>{JSON.stringify(state, null, 2)}</pre>
            </div>
          </div>}
        </>
  );
}

export default App;
