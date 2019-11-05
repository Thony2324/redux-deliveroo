import { SET_DELIVEROO_REQUEST, SET_DELIVEROO_SUCCESS, SET_DELIVEROO_ERROR, ADD_TO_CART } from "../../actions";

const initialState = {
  isLoading: null,
  error: null,
  data: null,
  cart: [],
  subTotal: 0,
  total: 0
};

let tab_cart = [];
let sub_total = 0;
let final_total = 0;
const shipping_cost = 2.5;

export const deliverooReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DELIVEROO_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null
      };
    case SET_DELIVEROO_SUCCESS:
      console.log("SET_DELIVEROO_SUCCESS...");
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload
      };
    case SET_DELIVEROO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: false
      };
    case ADD_TO_CART:
      // Add item to tab cart
      tab_cart.push(action.payload);
      // Get price and add to prev
      sub_total = sub_total + parseFloat(action.payload.price);
      final_total = sub_total + shipping_cost;
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
