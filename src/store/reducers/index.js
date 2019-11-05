import { combineReducers } from "redux";
import { deliverooReducer } from "./deliverooReducer";
import { panierReducer } from "./panierReducer";

export const reducer = combineReducers({
  deliveroo: deliverooReducer,
  panier: panierReducer
});
