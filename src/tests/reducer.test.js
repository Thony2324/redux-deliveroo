import { panierReducer, initialState } from "../store/reducers/panierReducer";
import { incrementQuantity, decrementQuantity } from "../actions";
import stateWithData from "./stateWithData";

test("initial state is correct", () => {
  expect(panierReducer(undefined, { type: "@@INIT" })).toEqual(initialState);
});

test("add an item", () => {
  expect(
    panierReducer(stateWithData.panier, incrementQuantity("1519055545-88"))
  ).toEqual([{ id: "1519055545-88", quantity: 1 }]);
});

test("add / remove items", () => {
  let state = stateWithData.panier;
  const dispatch = action => {
    state = panierReducer(state, action);
  };
  dispatch(incrementQuantity("1519055545-88"));
  dispatch(incrementQuantity("1519055545-137"));
  dispatch(decrementQuantity("1519055545-88"));
  dispatch({ type: "FAKE_ACTION" });

  expect(state).toEqual([{ id: "1519055545-137", quantity: 1 }]);
});
