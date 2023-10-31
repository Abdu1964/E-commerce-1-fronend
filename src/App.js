 import './App.css';
 import Navbar from './Component/layout/Navbar';
 import { Routes, Route} from 'react-router-dom'; 
 import Login from './Component/Auth/Login'
 import Register from './Component/Auth/register';
 import Home from './Component/home'
 import Order from './Component/order'
 import Footer from './Component/layout/Footer'
 

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
    <Route exact path="/" element={<Home />} />      
    <Route exact path="/Login" element={<Login />} />
    <Route exact path="/Register" element={<Register />} />
    <Route exact path="/Order" element={<Order />} />
    </Routes> 
     
    <Footer />
    </div>
  );
}

export default App;
