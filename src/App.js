
import React, {useState, useRef, useEffect} from "react"
import './App.scss';
import {Accordion,Btn,TimePickerComponent,SaveResultsBtn, PDF} from "./components"
import {weekArr} from "./data"
import jsPDF from 'jspdf';



function App() {
  const [state, setState]=useState({})
  const [showJSON, setShowJSON]=useState(false)
  const doc = new jsPDF();
  let ref = useRef()
  const callbacks={
    onSaveResults:()=>{
      setShowJSON(true)
      setState((prev)=> {
        return {...prev}
      })
    },
    onLoadPDF:()=>{
      doc.text(JSON.stringify(state, null, 2), 10, 10)
      doc.save("JSON.pdf");
     
    }
  }
  
	return (
        <>
          {weekArr.map((el,idx)=> {
            return <Accordion data={[el]} idx={el.id}  state={state} setState={setState} />
          })}
          <div className="save-btn-container">
            <SaveResultsBtn onClick={callbacks.onSaveResults} title="Показать JSON" />
          </div>
          {showJSON && <>
            <div className="save-btn-container">
            <SaveResultsBtn onClick={callbacks.onLoadPDF} title="Сохранить Pdf" />
          </div>
          <div style={{margin:"auto"}} >
            <div style={{borderLeft:"5px solid #1eff45", padding:"20px", background:"#333"}} ref={ref}>
              <pre style={{color:"white", textAlign:"justify"}}>{JSON.stringify(state, null, 2)}</pre>
            </div>
          </div>
       
          </>}
        </>
  );
}

export default App;
