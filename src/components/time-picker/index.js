// import React, { useState } from 'react';
// import { TimePicker } from 'antd';

// const TimePickerComponent = () => {
//   const [value, setValue] = useState(null);

//   const onChange = time => {
//     setValue(time);
//   };

//   return (
//   <div style={{position:"relative"}}>
//     <TimePicker value={value} onChange={onChange} />
//   </div>
  
//   );
// };
// export default TimePickerComponent
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.compact.css';
// import './index.css';
import { TimePicker, Button } from 'antd';
const format = 'HH:mm';
class TimePickerComponent extends React.Component {
  state = { open: false };

  handleOpenChange = open => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
    <div>
      <TimePicker.RangePicker
        onChange={this.props.onChange}
        value={this.props.time}
        format={format}
        open={this.state.open}
        onOpenChange={this.handleOpenChange}/>
      </div>
    );
  }
}
export default TimePickerComponent