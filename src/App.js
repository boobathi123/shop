import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes,Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Login from './component/Login';
import Signup from './component/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './component/Contact';
import About from './component/About';
function App() {
  return (
   <div>
     <Navbar/>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/products' Component={Products}/>
      <Route exact path='/products/:id' Component={Product}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/signup' Component={Signup}/>
      <Route exact path='/contact' Component={Contact}/>
      <Route exact path='/about' Component={About}/>
    </Routes>
   </div>
  );
}

export default App;
