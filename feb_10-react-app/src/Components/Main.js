import React from 'react'
import { HashRouter, NavLink,Routes ,Route} from 'react-router-dom'
import '../Style/index.css'
import Contact from './Contact'
import Grouplist from './Grouplist/Grouplist'
import Header from './Header'
import Home from './Home'
import Productlist from './Productlist/Productlist'
import Userlist from './Userlist/Userlist';
import Edituser from './Userlist/Edituser';
import EditProduct from './Productlist/EditProduct'
import EditGroup from './Grouplist/EditGroup'
import Json_Lclstorage from './Json_Lclstorage'


const Main = () => {
  // Json_Lclstorage();
  return (
      <HashRouter>
    <div>
        <h1>URL Params</h1>
      <ul className='header'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/user'>User List</NavLink></li>
          <li><NavLink to='/product'>Prouduct List</NavLink></li>
          <li><NavLink to='/group'>Group List</NavLink></li>
          <li><NavLink to='/header'>Header</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <div className='content'>
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route  path='/user' element={<Userlist/>}/>
              <Route path='/product' element={<Productlist/>}/>
              <Route path='/group' element={<Grouplist/>}  />
              <Route path='/header' element={<Header/>} />
              <Route path='/edituser' element={<Edituser/>} />
              <Route path='/editproduct' element={<EditProduct/>} />
              <Route path='/editgroup' element={<EditGroup/>}/>
              <Route path='/contact' element={<Contact/>} />
             

          </Routes>

      </div>
      
    </div>
  
    </HashRouter>
    
  )
}

export default Main
