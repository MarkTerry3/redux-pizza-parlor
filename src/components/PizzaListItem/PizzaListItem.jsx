import React from "react";
import { useDispatch } from "react-redux";
import "./PizzaListItem.css";


function PizzaListItem({ options }) {
  const dispatch = useDispatch();
  const addPizzaOptions = () => {
    dispatch({
      type: "ADD_PIZZA_OPTIONS",
      payload: options,
    });
  console.log('Added pizza to cart:', options)
  };

  console.log("in PizzaListItem component. Here is the item:", options);

  const toggleAddRemove = (status)

  return (
    <div className="pizza-item">
      {options.name}: {options.description} {options.price} 
      <button onClick={addPizzaOptions}>Add To Cart</button>
    </div>
  );
}

export default PizzaListItem;
