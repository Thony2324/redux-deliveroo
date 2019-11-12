import {
  SET_DELIVEROO_REQUEST,
  SET_DELIVEROO_SUCCESS,
  SET_DELIVEROO_ERROR,
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

export const incrementQuantity = id => {
  return { type: INCREMENT_QUANTITY, payload: id };
};

export const decrementQuantity = id => {
  return { type: DECREMENT_QUANTITY, payload: id };
};
