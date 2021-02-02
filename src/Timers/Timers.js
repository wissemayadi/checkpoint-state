import React, { useState, useEffect } from 'react';


// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// export default Clock;

class Clock extends React.Component {
  constructor() {
    super()
    let d = new Date()
      this.state = {
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        year: d.getFullYear(),
        time: d.toLocaleTimeString()
      }
    this.countingSecond = this.countingSecond.bind(this)
  }
  countingSecond() {
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString()
    })
  }
  componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
      <div className='timeclock-main'>
        <h3 className='timeclock-text'>{days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year} {this.state.time}</h3>
      </div>
    )
  }
}
export default Clock;
//autre solution statique

// import React, { Component } from "react";

// class Clock extends Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             dateClass: new Date()
//         }

//         this.time = this.state.dateClass.toLocaleTimeString();
//         this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
//     }

//     setTime = () => {
//         this.setState({
//             dateClass: new Date()
//         })
//         this.time = this.state.dateClass.toLocaleTimeString();
//         this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
//     }

//     componentDidMount () {
//         setInterval(this.setTime, 1000)
//     }
    
//     render () {
//         return (
//             <div>
//                 {this.hourMin}
//             </div>
//         )
//     }
// }

// export default Clock;