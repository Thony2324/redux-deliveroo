import {
  SET_DELIVEROO_REQUEST,
  SET_DELIVEROO_SUCCESS,
  SET_DELIVEROO_ERROR,
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from "../constants";

export const fetchApiDeliveroo = async dispatch => {
  dispatch({ type: SET_DELIVEROO_REQUEST });
  // FETCH API
  await fetch("https://deliveroo-api.now.sh/menu")
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        dispatch({ type: SET_DELIVEROO_SUCCESS, payload: data });
      }, 500);
    })
    .catch(error => {
      dispatch({ type: SET_DELIVEROO_ERROR, payload: error });
    });
};

export const addToCart = (item, dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: item });
};

export const incrementQuantity = (item, dispatch) => {
  dispatch({ type: INCREMENT_QUANTITY, payload: item });
};

export const decrementQuantity = (item, dispatch) => {
  dispatch({ type: DECREMENT_QUANTITY, payload: item });
};
