import {BrowserRouter ,Link, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Stuff from './Components/Stuff';
import Contact from './Components/Contact';
import { Component } from 'react';
import './Style.css/index.css'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div>
      <h1>Simple SPA</h1>
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Stuff">Stuff</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="content">
        <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
        <Route  path="/Stuff" element={<Stuff/>}></Route>
        <Route  path="/Contact" element={<Contact/>} ></Route>
        </Routes>
      </div>
    </div>
   
  </BrowserRouter>
  )
  }
}

export default App;
