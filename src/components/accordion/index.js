
import React, { Component } from "react"
import Switcher from "../switch"
import cls from "./style.module.scss"
import TimeSelectElement from "../time-select-element"
import {servisesArr} from "../../data"

class Accordion extends Component {
    constructor(props) {
        super(props)
    }
    state={

    }
    componentWillMount () {
        let accordion = [];
      
        this.props.data.forEach((i) => {
         accordion.push({
          id:i.id,
          title: i.title, 
          open: false
        });
      });
      
          this.setState({
            accordionItems: accordion,
            servisesArr
        });
    }
    click=(i)=> {
        const newAccordion = this.state.accordionItems.slice();
        const index = newAccordion.indexOf(i)
      
        newAccordion[index].open = !newAccordion[index].open;
        this.setState({accordionItems: newAccordion});
    }
    render () {
        const sections = this.state.accordionItems.map((i) => (
          <div key={this.state.accordionItems.indexOf(i)}>
              <Switcher 
              id={i.id}
              vm={this}/>
            <div 
              className={cls.title} 
              onClick={this.click.bind(null, i)}
            >
             <div className={cls["arrow-wrapper"]}>
               <i className={i.open 
                 ? "fa fa-angle-down fa-rotate-180" 
                 : "fa fa-angle-down"}
               ></i>
             </div>
             <span className={cls["title-text"]}>
               {i.title}
             </span>
           </div>
           <div 
           className={i.open 
             ? cls["content"] +" "+ cls["content-open"] 
             : cls["content"]}>
              <div className={i.open ? cls["content-text"] +" "+cls["content-text-open"] 
                : cls["content-text"]}> 
                 {servisesArr.map((el,idx)=>{
                  return <TimeSelectElement title={el.title} onAddItem={()=>alert("clicked")} vm={this} dayId={i.id}  idx={el.id}/>
                })}
              </div>
            </div>
          </div>
        ));
        
        return (
          <div className={cls.accordion}>
            {sections}
          </div>
        );
       }
}

export default Accordion