import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import Fetch from './Fetch';
import Navbar from './Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/home'  element={<Home/>}></Route>
        <Route path='/dashboard/:id'  element={<Dashboard/>}></Route>
        <Route path='/about'  element={<About/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
       </Routes>
      </BrowserRouter>
     
  {/* <Regisration/> */}
{/* <Fetch/> */}
    </div>
  );
}

export default App;
