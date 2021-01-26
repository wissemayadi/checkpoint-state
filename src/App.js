import logo from './logo.svg';
import './App.css';
import React ,{ useState  }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import { render } from 'react-dom';
import "./index.css";
import Navbar from './navbar/Navbar';

class App extends React.Component{
  constructor(){
    super()
   
    this.state={
        
      fullName:"wissem",
      Bio:'je suis passionner par le fullstack js ',
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
    <div className="info">
{/*       
    <p>{this.state.fullName}</p>
<p>{this.state.Bio}</p>
<p>{this.state.profession}</p>
<p><img src={this.state.imgSrc}/></p> */}

{

[
  'Primary',
  
].map((variant, idx) => (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.imgSrc}  />
  <Card.Body>
    <Card.Title>{this.state.fullName}</Card.Title>
    <Card.Text>
    {this.state.Bio} <br/>
    {this.state.profession}
    </Card.Text>
    <Button variant="primary">Valider</Button>
  </Card.Body>
</Card> ))} 
</div>:null 

}
  
  
  

  
  
    </div>
    )
};}

export default App;
  