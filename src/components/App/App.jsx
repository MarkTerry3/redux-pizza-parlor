import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SelectPizza from "../SelectPizza/SelectPizza";

const [pizzaList, setPizzaList] = useState([]);

function App() {
  useEffect(() => {
    console.log("Inside useEffect");
  }, []);

  const getPizza = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        console.log("GET Pizza response= ", response);
        setPizzaList();
      })
      .catch((error) => {
        console.log("GET Pizza error", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
      <SelectPizza />
    </div>
  );
}

export default App;
