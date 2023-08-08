import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import {
  addItemToCart,
  getCartItems,
  updateQuantity,
} from "../redux/cartSlice";
import swal from "sweetalert";

const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector(getCartItems);
  const itemsInCart = items.some((item) => item.dishId === dish.id);

  const add = () => {
    if (!itemsInCart) {
      dispatch(addItemToCart({ dish, quantity }));
      swal(`${quantity} item(s) is added!`, "Go back to the store!", "success");
      setQuantity(1);
    } else {
      dispatch(updateQuantity({ dish, quantity }));
      swal(`${quantity} item(s) is added!`, "Go back to the store!", "success");
      setQuantity(1);
    }
  };

  return (
    <div className="add">
      <img className="img" src={`./${dish.img}.jpg`} alt="burger" />
      <p>{dish.name}</p>
      <p>$ {dish.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <button onClick={add}>Add to cart</button>
    </div>
  );
};
export default Dish;
