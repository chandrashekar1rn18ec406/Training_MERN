// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Component1 from './Components/Components_1';
import Component2 from './Components/Components_2';
import Component3 from './Components/Components_3';
import Button from './Task-5/Task5';
import Img from './Task-2/Img_add';



 class App extends React.Component{
    state = { count :''}
    firstButton = () =>{
      this.setState({count:1})
    }
    secondButton =() =>{
      this.setState({count:2})
    }
    thirdButton =() =>{
      this.setState({count:3})
    }

  render(){
    const {count} =this.state;
    return(
      
      <div>
      <h1>Task-1</h1>
      {count ===1 && <Component1/>}
      {count ===2 && <Component2/>}
      {count ===3 && <Component3/>}

        <button onClick={this.firstButton}>Button-1</button>
        <button onClick={this.secondButton}>Button-2</button>
        <button onClick={this.thirdButton}>Button-3</button>
      <h1>Task-2</h1>
          <Img url="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />

      <h1>Task-5</h1>
      <Button/>

        
         
        </div>
      )
    
  }
   
 }

export default App;
