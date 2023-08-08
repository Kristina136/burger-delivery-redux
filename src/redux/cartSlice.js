import { createSlice, current } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const timerId = new Date().getTime();
   {state.cartItems.push({
          dishId: action.payload.dish.id,
          id: timerId,
          quantity: action.payload.quantity,
          price: action.payload.dish.price,
          totalPrice: action.payload.quantity * action.payload.dish.price,
        });
        console.log(current(state.cartItems))
      } 
    },
    updateQuantity: (state, action) => {
      const newCart = [];
      state.cartItems.forEach(item => {
          if (item.dishId === action.payload.dish.id) {
              let newQuantity = item.quantity + action.payload.quantity;
              let totalSum = item.price * newQuantity;
              const changeCart = {...item, quantity: newQuantity, totalPrice: totalSum };
              newCart.push(changeCart);
          } else {
              newCart.push(item);
          }
      })
      state.cartItems = newCart;
  },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartitem) => cartitem.id !== action.payload.cartItemId
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateQuantity } = slice.actions;
export const getCartItems = (state) => state.cart.cartItems;
export default slice.reducer;

export const getTotalQuantity = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
      return cartItems.quantity + total;
  }, 0)
}
export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total;
  }, 0);
};
