import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './Style/index.css'
import Userlist from './Components/Userlist';
import Profile from './Components/Profilepic';

function App() {
  return (
    <Router>
           <div className="App">
            <nav className="navbar">
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/User">User</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </nav>
           <Routes>
                 <Route  path='/' element={ <Home/>}></Route>
                 <Route exact path='/User' element={< Userlist />}></Route>
                 <Route exact path='/profilepic/:id' element={< Profile />}></Route>
                 <Route exact path='/About' element={< About />}></Route>
                 <Route exact path='/Contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
