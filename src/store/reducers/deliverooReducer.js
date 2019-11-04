import { SET_DELIVEROO_REQUEST, SET_DELIVEROO_SUCCESS, SET_DELIVEROO_ERROR } from "../../actions";

const initialState = {
  isLoading: null,
  error: null,
  data: null
};

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
    default:
      return state;
  }
};
