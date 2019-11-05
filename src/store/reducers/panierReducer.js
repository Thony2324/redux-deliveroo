import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../../actions";

const initialState = {
  cart: [],
  subTotal: 0,
  total: 0
};

let tab_cart = [];
let sub_total = 0;
let final_total = 0;
const shipping_cost = 2.5;

export const panierReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Get index of item in tab cart
      const itemIndex = tab_cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) {
        // item doesn't exist in cart
        tab_cart.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: action.payload.quantity !== undefined ? parseInt(action.payload.quantity) + 1 : 1
        });
      } else {
        // item exist in cart, so i only increment quantity
        tab_cart[itemIndex].quantity++;
      }
      // Calcul total
      sub_total = sub_total + parseFloat(action.payload.price);
      final_total = sub_total + shipping_cost;
      return {
        ...state,
        cart: tab_cart,
        subTotal: sub_total,
        total: final_total
      };
    case INCREMENT_QUANTITY:
      const itemIndex2 = tab_cart.findIndex(item => item.id === action.payload.id);
      tab_cart[itemIndex2].quantity++;

      sub_total = sub_total + parseFloat(tab_cart[itemIndex2].price);
      final_total = sub_total + shipping_cost;

      return {
        ...state,
        cart: tab_cart,
        subTotal: sub_total,
        total: final_total
      };
    case DECREMENT_QUANTITY:
      const itemIndex3 = tab_cart.findIndex(item => item.id === action.payload.id);
      tab_cart[itemIndex3].quantity--;

      sub_total = sub_total - parseFloat(tab_cart[itemIndex3].price);
      final_total = sub_total + shipping_cost;

      // Check if quantity = 0, and remove item from cart
      if (tab_cart[itemIndex3].quantity === 0) {
        // remove item from cart
        tab_cart = tab_cart.filter(item => item.id !== action.payload.id);
      }

      return {
        ...state,
        cart: tab_cart,
        subTotal: sub_total,
        total: final_total
      };
    default:
      return state;
  }
};
