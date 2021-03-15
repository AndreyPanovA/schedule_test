
import React, { Component } from "react"
import Switch from "../switch"
import cls from "./style.module.scss"
import TimeSelectElement from "../time-select-element"

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
          title: i.title, 
          content: i.content, 
          open: false
        });
      });
      
          this.setState({
        accordionItems: accordion
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
         
              <Switch id={this.props.idx}/>
   
           </div>
           <div 
          //  className={i.open ? cls["content"] +" "+ cls["content-open"] : cls["content-text"]}
           className={i.open 
             ? cls["content"] +" "+ cls["content-open"] 
             : cls["content"]}
            >
              <div className={i.open ? cls["content-text"] +" "+cls["content-text-open"] 
                : cls["content-text"]}
              > 
              
              {i.content.map((el,idx)=>{
                console.log("hire", el.title)
                return <TimeSelectElement title={el.title} />
              })}

              {/* {i.content.map(({title})=> <TimeSelectElement title={title} />)} */}
             
              
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