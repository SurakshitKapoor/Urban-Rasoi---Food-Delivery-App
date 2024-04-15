
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Logout from './pages/Logout';
import SimpleSlider from './components/SimpleSlider';
import UncontrolledExample from './components/UnControlledCarousel';

function App() {
  return (
    <div className="App">
      App Component

      <Navbar />

      {/* <SimpleSlider /> */}
      <UncontrolledExample />

      <Routes>
        
          <Route path='/' element={<Home />}></Route>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/signup' element={<Signup />}></Route>

          <Route path='/orders' element={<Orders />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          
      </Routes>

    </div>
  );
}

export default App;
