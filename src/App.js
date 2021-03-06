import logo from './logo.svg';
import './App.css';
import React ,{ useState  }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import { render } from 'react-dom';
import "./index.css";
import Navbaro from './navbar/Navbar';
import Testou from "./Hookss/Test";
import Footer from "./Footer/Footer";

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
    componenetDidMount() {
        
         this.count()
        };
     

render() {

return(
 
<div className="affichage">
  <div className="navb"><Navbaro/></div>
  <h1>Welcome to my website </h1>

  <h3  border="success">{this.state.count}</h3>
  
  <Button variant="primary" onClick={()=>

this.setState({
  show:!this.state.show
})}>
  
  Show</Button>
 
  { this.state.show?
    <div className="info">


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
</div> : this.state.count=0

}
  
  
  

  
  <Footer/>
    </div>
    )
};}

export default App;