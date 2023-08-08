import img from "./icon.png";
import CartItem from "./CartItem";
import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../redux/cartSlice"

const Cart =()=>{


    const cartItem = useSelector(getCartItems);
    const totalPrice= useSelector(getTotalPrice);


    
    return(
        <div>
           <img className="cart" src={img} alt="cart"/>
           <p> Sub total: $ { totalPrice}</p>
  <p className={cartItem.length>=1 && totalPrice<=30 ? "red" : "none"}>Delivery fee : $ 5</p>
        <h2> Total: $ {cartItem.length>=1 && totalPrice<=30 ? totalPrice+5 : totalPrice}</h2>
       
        </div>
    )
}
export default Cart