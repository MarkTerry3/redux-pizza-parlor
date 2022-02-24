import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SelectPizza from "../SelectPizza/SelectPizza";
import AddCustomerInfo from "../AddCustomerInfo/AddCustomerInfo";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  // const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    console.log("Inside useEffect");
    getPizza();
  }, []);

  const dispatch = useDispatch();

  const getPizza = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        console.log("GET Pizza response= ", response);
        dispatch({
          type: "FETCH_PIZZA_OPTIONS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("GET Pizza error", error);
      });
  };

  return (
    <Router>
      <div className="App">
        <div className="links">
          <Link to="/api">Home</Link>
          <Link to="/api/pizza/list">Pizza Selection</Link>
          <Link to="/api/pizza/customer">Customer Info</Link>
          <Link to="/api/order">Checkout</Link>
        </div>
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <Route path="/api" exact>
          <img src="images/pizza_photo.png" />
          <p>Pizza is great.</p>
        </Route>
        <Route path="/api/pizza/list">
          <SelectPizza />
        </Route>
        <Route path="/api/pizza/customer">
          <AddCustomerInfo />
        </Route>
        <Route path="api/order">
          {/* put customer details component here
        customer details will lead to the checkout page, 
        but I don't think there should be a link for the checkout page specifically */}
        </Route>
      </div>
    </Router>
  );
}

export default App;
