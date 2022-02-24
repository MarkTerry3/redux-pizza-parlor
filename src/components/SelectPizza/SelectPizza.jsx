import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import PizzaListItem from "../PizzaListItem/PizzaListItem";

function SelectPizza() {
  console.log("in SelectPizza component");

  const options = useSelector((store) => store.pizzaChoiceReducer);

  return (
    <>
      {/* display all pizza options */}
      {options.map((option) => {
        console.log("here is the item being sent down from within SelectPizza:", option);
        return (
          <div key={option.id}>
            <PizzaListItem key={option.id} options={option} />
          </div>
        );
      })}
    </>
  );
}

export default SelectPizza;
