import { combineReducers } from "redux";
import { deliverooReducer } from "./deliverooReducer";

export const reducer = combineReducers({
  deliveroo: deliverooReducer
});
