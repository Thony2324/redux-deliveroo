export const SET_DELIVEROO_REQUEST = "SET_DELIVEROO_REQUEST";
export const SET_DELIVEROO_SUCCESS = "SET_DELIVEROO_SUCCESS";
export const SET_DELIVEROO_ERROR = "SET_DELIVEROO_ERROR";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
//export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const fetchApiDeliveroo = async dispatch => {
  dispatch({ type: SET_DELIVEROO_REQUEST });
  // FETCH API
  await fetch("https://deliveroo-api.now.sh/menu")
    .then(response => response.json())
    .then(data => {
      // enlever le timeout car non nécessaire, sert uniquement à mieux voir le loader...
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
  //dispatch({ type: INCREMENT_QUANTITY, payload: item.id });
};

// export const removeFromCart = (item, dispatch) => {
//   dispatch({ type: REMOVE_FROM_CART, payload: item });
// };
