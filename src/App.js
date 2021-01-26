import logo from './logo.svg';
import './App.css';
import React ,{ useState  }  from 'react';


import { render } from 'react-dom';
import "./index.css";


class App extends React.Component{
  constructor(){
    super()
   
    this.state={
        
      fullName:"wissem",
      Bio:'Lorem ajakak',
      profession:"informatiker",
      imgSrc:"http://images.jedessine.com/_uploads/_tiny_galerie/20130731/vign-coloriage-rois-de-france-86x_y6d.jpg",
      show:false ,
      count : 0
      
    }}
   
    
    componentDidMount(){
     setInterval(()=>{
       this.setState({
         count : this.state.count+1
       })
     },1000)

    }
//   let today = new Date(),
//   mydate =
//     today.getFullYear() +
//     "-" +
//     (today.getMonth() + 1) +
//     "-" +
//     today.getDate();

// const [show, setShow] = useState(false);
// const [date, setDate] = useState(mydate);
render() {
return(
 
<div>
  <h3>{this.state.count}</h3>
  <button onClick={()=>

this.setState({
  show:!this.state.show
})}>
  
  Show</button>
 
  {this.state.show?
    <div>
    <p>{this.state.fullName}</p>
<p>{this.state.Bio}</p>
<p>{this.state.profession}</p>
<p><img src={this.state.imgSrc}/></p>
</div>:null 

}
  
  
  

  
  
    </div>
    )
};}

export default App;
  