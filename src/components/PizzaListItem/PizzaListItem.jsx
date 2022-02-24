import React from "react";
import { useDispatch } from "react-redux";

function PizzaListItem({ options }) {
  const dispatch = useDispatch();
  const addPizzaOptions = () => {
    dispatch({
      type: "FETCH_PIZZA_OPTIONS",
      payload: options,
    });
  };

  console.log("in PizzaListItem component. Here is the item:", options);

  return (
    <li>
      {options.name}: {options.description} {options.price}
    </li>
  );
}

export default PizzaListItem;
