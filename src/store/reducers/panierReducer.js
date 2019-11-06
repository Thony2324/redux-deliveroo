import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, SHIPPING_COST, DISCOUNT } from "../../constants";

const initialState = {
  cart: [],
  subTotal: 0,
  discount: 0,
  total: 0
};

let tab_cart = [];
let sub_total = 0;
let deliveroo_discount = 0;
let final_total = 0;

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
      if (sub_total > 50) {
        deliveroo_discount = sub_total * DISCOUNT;
      }
      final_total = sub_total - deliveroo_discount + SHIPPING_COST;
      return {
        ...state,
        cart: tab_cart,
        subTotal: sub_total,
        discount: deliveroo_discount,
        total: final_total
      };
    case INCREMENT_QUANTITY:
      const itemIndex2 = tab_cart.findIndex(item => item.id === action.payload.id);
      tab_cart[itemIndex2].quantity++;

      sub_total = sub_total + parseFloat(tab_cart[itemIndex2].price);
      if (sub_total > 50) {
        deliveroo_discount = sub_total * DISCOUNT;
      }
      final_total = sub_total - deliveroo_discount + SHIPPING_COST;

      return {
        ...state,
        cart: tab_cart,
        subTotal: sub_total,
        discount: deliveroo_discount,
        total: final_total
      };
    case DECREMENT_QUANTITY:
      const itemIndex3 = tab_cart.findIndex(item => item.id === action.payload.id);
      tab_cart[itemIndex3].quantity--;

      sub_total = sub_total - parseFloat(tab_cart[itemIndex3].price);
      if (sub_total > 50) {
        deliveroo_discount = sub_total * DISCOUNT;
      } else {
        deliveroo_discount = 0;
      }
      final_total = sub_total - deliveroo_discount + SHIPPING_COST;

      // Check if quantity = 0, and remove item from cart
      if (tab_cart[itemIndex3].quantity === 0) {
        // remove item from cart
        tab_cart = tab_cart.filter(item => item.id !== action.payload.id);
      }
      return {
        ...state,
        cart: tab_cart,
        subTotal: sub_total,
        discount: deliveroo_discount,
        total: final_total
      };
    default:
      return state;
  }
};
