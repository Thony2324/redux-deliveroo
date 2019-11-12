import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { EnterpriseProvider } from "./contexts/EnterpriseContext";

ReactDOM.render(
  <Provider store={store}>
    <EnterpriseProvider>
      <App />
    </EnterpriseProvider>
  </Provider>,
  document.getElementById("root")
);
