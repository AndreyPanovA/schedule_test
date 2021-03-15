import './App.scss';
import {Accordion,Btn} from "./components"


function App() {
  let data = [
    {
      title: "Понедельник", 
      content: `Lorem ipsum dolor sit amet, `
    },
  ];
  const places=[{title:"В москве"},{title:"Студия на Академической"},{title:"Перерыв"}]
  const weekArr=[{title:"Понедельник", content:places}, {title:"Вторник",content:places},{title:"Среда",content:places},{title:"Четверг",content:places},{title:"Пятница",content:places},{title:"Суббота",content:places},{title:"Воскресенье",content:places}]
	return (
   
        <>
        {weekArr.map((el,idx)=> <Accordion data={[el]} idx={idx} />)}
          <Btn />
        </>
 
  );
}

export default App;
