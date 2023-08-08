import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



import "./App.css";
import Component from "./Filter/Component";
import Dishes from "./Dishes/Dishes";
import Cart from "./Cart/Cart";
import img from "./icon.png";
import { useSelector } from "react-redux";
import { getCartItems, getTotalQuantity } from "./redux/cartSlice";
import Home from "./Home";
import CartPage from "./CartPage";
function App() {
  const cartItem = useSelector(getCartItems);
  const totalQuantity= useSelector(getTotalQuantity);
  return (
    <Router>
    <nav>
      <Link to="/" className='link'></Link>
      <Link to="/Cart" className='link'>  <div className="cartCont">
            <img
              className="cart"
              src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/external-cart-essentials-icongeek26-outline-gradient-icongeek26.png"
              alt="external-cart-essentials-icongeek26-outline-gradient-icongeek26"
            />
            <h3> + {totalQuantity}</h3>
          </div>
        </Link>
     
    
    </nav>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Cart' element={<CartPage/>}/>
    
    
    
     </Routes>
      </Router>
    
  );
}

export default App;
