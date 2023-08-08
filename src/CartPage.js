import img from "./icon.png";
import { useSelector } from "react-redux"

import CartItem from "./Cart/CartItem";
import { getCartItems, getTotalPrice } from "./redux/cartSlice";
import { Link } from "react-router-dom";

const CartPage =()=>{


    const cartItem = useSelector(getCartItems);
    const totalPrice= useSelector(getTotalPrice);


   

    return(
        <div>
        <Link to="/"><img  className="cart" width="64" height="64" src="https://img.icons8.com/nolan/64/home-page.png" alt="home-page"/>
         </Link>     
        
        
         <div className="cartPage">
         { cartItem.map(cartItem=> <CartItem key={cartItem.id} cartItem={cartItem}/>)}
          
            </div>
           <div>
           <p> Sub total: $ { totalPrice}</p>
        <p className={cartItem.length>=1 && totalPrice<=30 ? "red" : "none"}>Delivery fee : $ 5</p>
        <h2> Total: $ {cartItem.length>=1 && totalPrice<=30 ? totalPrice+5 : totalPrice}</h2>
         </div>

       



        </div>
    )
}
export default CartPage