import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { App, mapDispatchToProps, mapStateToProps } from "../components/App";
import { createStore } from "redux";
import { reducer } from "../store/reducers/index";
import { Provider, connect } from "react-redux";
import stateWithData from "./stateWithData";

function renderWithRedux(ui, options = {}) {
  const { initialState, store } = options;
  const theStore = store ? store : createStore(reducer, initialState);

  return {
    ...render(<Provider store={theStore}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("can render App with default state", () => {
  const getDeliverooMock = jest.fn();
  const newMapDispatchToProps = dispatch => ({
    ...mapDispatchToProps(dispatch),
    getDeliveroo: () => getDeliverooMock()
  });
  const Connected = connect(mapStateToProps, newMapDispatchToProps)(App);
  expect(() => renderWithRedux(<Connected />)).not.toThrow();
  expect(getDeliverooMock).toHaveBeenCalledTimes(1);
});

test("can add an item to cart", () => {
  cleanup();
  const getDeliverooMock = jest.fn();
  const newMapDispatchToProps = dispatch => ({
    ...mapDispatchToProps(dispatch),
    getDeliveroo: () => getDeliverooMock()
  });
  const Connected = connect(mapStateToProps, newMapDispatchToProps)(App);
  const { getByText, getByTestId } = renderWithRedux(<Connected />, {
    initialState: JSON.parse(JSON.stringify(stateWithData))
  });
  expect(getByText("Brunch authentique 1 personne")).toBeDefined();
  const brunch = getByText("Brunch authentique 1 personne");
  fireEvent.click(brunch);
  expect(getByTestId("cart-total")).toHaveTextContent("€27.50");
  fireEvent.click(brunch);
  expect(getByTestId("cart-total")).toHaveTextContent("€52.50");
});
