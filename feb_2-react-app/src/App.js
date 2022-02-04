
import './App.css';

import React from 'react';
import Button from './Task-1/ButtonUser';
import ButtonProduct from './Task-1/ButtonProduct';




class App extends React.Component{
  state = {
    isActive : false,
    isProduct : false
  }
  userData= () =>{
    this.setState({
      isActive : true,
      isProduct: false
    })
  }
  productData = () => {
    this.setState({
      isActive : false,
      isProduct: true
    })
  }
  
  render(){
    const {isProduct, isActive} = this.state
    return(
     <div>
     <button  onClick={this.userData} style={{borderRadius:"10px",color:'orange' ,padding:'10px', marginTop:'30px' }} >Click User Details</button>
     
      <br></br>
        <button onClick={this.productData} style={{borderRadius:"10px",color:'orange' ,padding:'10px', marginTop:'10px'}}>Click Product Details</button>
      {
        isActive ? <Button/> : "" 
      }
        {
          isProduct ? <ButtonProduct/> : ""
        }
      
     </div>
    )
  }
}
export default App;
