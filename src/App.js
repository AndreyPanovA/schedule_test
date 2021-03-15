import './App.scss';
import {Accordion} from "./components"

function App() {
  let data = [
    {
      title: "Понедельник", 
      content: `Lorem ipsum dolor sit amet, `
    },
    

  ];
  const weekArr=[{title:"Понедельник", content:""}, {title:"Вторник",content:""},{title:"Среда",content:""},{title:"Четверг",content:""},{title:"Пятница",content:""},{title:"Суббота",content:""},{title:"Воскресенье",content:""}]
	return (
   
        <>
        {weekArr.map((el,idx)=> <Accordion data={[el]} idx={idx} />)}
        </>
 
  );
}

export default App;
