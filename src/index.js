import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './slices/accountSlice';
import bonusReducer from './slices/bonusSlice';
import rewadsReducer from "./Reducers/rewads";


const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    rewads: rewadsReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
