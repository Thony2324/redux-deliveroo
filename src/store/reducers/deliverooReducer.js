import {
  SET_DELIVEROO_REQUEST,
  SET_DELIVEROO_SUCCESS,
  SET_DELIVEROO_ERROR,
  ADD_TO_CART,
  INCREMENT_QUANTITY
  //DECREMENT_QUANTITY
  //REMOVE_FROM_CART
} from "../../actions";

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
        ...state, // copy all properties of state
        isLoading: true,
        error: null,
        data: null
      };
    case SET_DELIVEROO_SUCCESS:
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
      // const objIndex = tab_cart.findIndex(item => item.id === action.payload);
      // tab_cart[objIndex].quantity = tab_cart[objIndex].quantity++;
      // tab_cart[objIndex].price = objIndex.quantity * objIndex.price;

      // sub_total = sub_total + parseFloat(tab_cart[objIndex].price);
      // final_total = sub_total + shipping_cost;

      return {
        ...state
      };
    // case REMOVE_FROM_CART:
    //   // Filter tab cart with the item to remove
    //   const filtered_tab = tab_cart.filter(item => item.id !== action.payload.id);
    //   //filtered_tab.filter(item => item.id !== action.payload.id);
    //   // Get price and add to prev
    //   sub_total = sub_total - parseFloat(action.payload.price);
    //   final_total = sub_total + shipping_cost;
    //   return {
    //     ...state,
    //     cart: filtered_tab,
    //     subTotal: sub_total,
    //     total: final_total
    //   };
    default:
      return state;
  }
};
