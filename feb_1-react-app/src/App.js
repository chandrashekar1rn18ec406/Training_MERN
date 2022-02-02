
import './App.css';
import Users from './Task-1/User';
import Products from './Task-1/Product';
import React from 'react';


class App extends React.Component{
  state={users:[],product:[]}
  componentDidMount(){

   
   fetch("https://reqres.in/api/users?page=2")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      let userdata=data.data
      this.setState({users:userdata})
    })
    fetch("https://reqres.in/api/products")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      let userdata=data.data
      this.setState({product:userdata})
    })
    }
    
  
  render(){
    const{users}=this.state
    const{product}=this.state
    console.log(users)
    return(
      <div className="bg-container">
        <h1 style={{textAlign:'center',color:'#4d6c7d'}}>This is User Data</h1>
        <table className="table" style={{marginTop:'30px',  marginLeft: "auto",
    marginRight: "auto"
   }}>
          <tr className="trEl">
            <th className="trEl">User Id</th>
            <th className="trEl">Get details</th>
          </tr>
         
        {users.map((eachuser)=>
        <Users user={eachuser} key={eachuser.id}/>)}
          
        </table>
        <h1 style={{textAlign:'center' ,color:"#aaa432"}}>This is Product Data</h1>
        <table className="table" style={{marginTop:'30px',  marginLeft: "auto",
    marginRight: "auto"}}>

          <tr className="trEl">
            <th className="trEl">Product Id</th>
            
            
            <th className="trEl">Get details</th>
            
          </tr>
         
          {product.map((eachproduct)=>
        <Products user={eachproduct} key={eachproduct.id}/>)}
        </table>
        
       
      </div>
    )
  }
}
export default App;
