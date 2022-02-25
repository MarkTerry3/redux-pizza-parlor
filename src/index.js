import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

const customerInfoReducer = (state = [], action) => {
  if (action.type === "ADD_CUSTOMER_INFO") {
    return action.payload;
  }
  return state;
};

const pizzaChoiceReducer = (state = [], action) => {
  if (action.type === "FETCH_PIZZA_OPTIONS") {
    return action.payload;
  } 
  return state;
};

const pizzaAddReducer = (state = [], action) => {
  if (action.type === 'ADD_PIZZA_OPTIONS') {
    return [...state, action.payload]
  }
  return state;
};


// The store is the big JavaScript Object that holds all of the information for our application
const reduxStore = createStore(
  combineReducers({
    pizzaChoiceReducer,
    customerInfoReducer,
    pizzaAddReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
