import {
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  SHIPPING_COST,
  DISCOUNT
} from "../../constants";

export const initialState = []; // [{ id: '', quantity: 1 }, {...}]

export function getCartDetails(panier, deliveroo) {
  const data = deliveroo.data;
  if (data === null) {
    return [];
  }
  return panier
    .map(cartItem => {
      // find iten with id cartItem.id in data
      let item = null;
      Object.keys(data.menu).forEach(key => {
        const menus = data.menu[key];
        if (!item) {
          item = menus.find(menuItem => menuItem.id === cartItem.id);
        }
      });
      if (!item) {
        return null;
      }
      return {
        ...cartItem,
        item: item
      };
    })
    .filter(v => v !== null);
}

export function computeCartTotal(cartDetails) {
  let subTotal = 0;
  cartDetails.forEach(cartItem => {
    subTotal += cartItem.item.price * cartItem.quantity;
  });
  let discount = 0;
  if (subTotal > 50) {
    discount = subTotal * DISCOUNT;
  }
  const shipping = cartDetails.length === 0 ? 0 : SHIPPING_COST;
  const total = subTotal - discount + shipping;
  return {
    subTotal,
    discount,
    total
  };
}

export const panierReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_QUANTITY:
      const itemId = action.payload;
      const itemIndex = state.findIndex(item => item.id === itemId);
      if (itemIndex === -1) {
        return [...state, { id: itemId, quantity: 1 }];
      }
      const copy = [...state];
      copy[itemIndex] = { id: itemId, quantity: copy[itemIndex].quantity + 1 };
      return copy;

    // tab_cart[itemIndex2].quantity++;

    // sub_total = sub_total + parseFloat(tab_cart[itemIndex2].price);
    // if (sub_total > 50) {
    //   deliveroo_discount = sub_total * DISCOUNT;
    // }
    // final_total = sub_total - deliveroo_discount + SHIPPING_COST;

    // return {
    //   ...state,
    //   cart: tab_cart,
    //   subTotal: sub_total,
    //   discount: deliveroo_discount,
    //   total: final_total
    // };
    case DECREMENT_QUANTITY:
      const decrementItemId = action.payload;
      const decItemIndex = state.findIndex(item => item.id === decrementItemId);
      if (decItemIndex === -1) {
        return state;
      }
      if (state[decItemIndex].quantity === 1) {
        return state.filter(item => item.id !== decrementItemId);
      }
      const decCopy = [...state];
      decCopy[decItemIndex] = {
        id: decrementItemId,
        quantity: decCopy[decItemIndex].quantity - 1
      };
      return decCopy;

    // tab_cart[itemIndex3].quantity--;

    // sub_total = sub_total - parseFloat(tab_cart[itemIndex3].price);
    // if (sub_total > 50) {
    //   deliveroo_discount = sub_total * DISCOUNT;
    // } else {
    //   deliveroo_discount = 0;
    // }
    // final_total = sub_total - deliveroo_discount + SHIPPING_COST;

    // // Check if quantity = 0, and remove item from cart
    // if (tab_cart[itemIndex3].quantity === 0) {
    //   // remove item from cart
    //   tab_cart = tab_cart.filter(item => item.id !== action.payload.id);
    // }
    // return {
    //   ...state,
    //   cart: tab_cart,
    //   subTotal: sub_total,
    //   discount: deliveroo_discount,
    //   total: final_total
    // };
    default:
      return state;
  }
};
