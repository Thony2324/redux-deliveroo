export const SET_DELIVEROO_REQUEST = "SET_DELIVEROO_REQUEST";
export const SET_DELIVEROO_SUCCESS = "SET_DELIVEROO_SUCCESS";
export const SET_DELIVEROO_ERROR = "SET_DELIVEROO_ERROR";

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
