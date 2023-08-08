import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";
import data from "./../Dishes/data";
import swal from 'sweetalert';



const CartItem =({cartItem})=>{

const dishes = data.find(item=>item.id===cartItem.dishId);
const dispatch =useDispatch();
const remove=()=>{
    dispatch(removeItemFromCart({cartItemId:cartItem.id}));
    swal("Item(s) is removed!", "Go back to the store!", "success");
}


    return(
        <div onClick={remove} className="cartContainer">
             <p> {dishes.name} </p>
            <p> {cartItem.quantity}  portion</p>
            <p> $ {dishes.price*cartItem.quantity} </p>
           <img className="imgCart" src={`./${dishes.img}.jpg`} alt="dish"/>
        
        </div>
    )
}
export default CartItem