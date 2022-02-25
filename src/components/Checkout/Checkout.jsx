import axios from 'axios';
import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import SelectPizza from '../SelectPizza/SelectPizza';
import "./Checkout.css";
import Axios from 'axios';
// import axios from 'axios';



function Checkout() {

    const customerInfoReducer = useSelector(store => store.customerInfoReducer);
    const pizzaAddReducer = useSelector(store => store.pizzaAddReducer);


    const handleCheckout = () => {
        console.log(customerInfoReducer);

        // POST for customerInfoReducer
    axios.post('/api/order', {customerInfoReducer})
        .then((response) => {
            console.log('in .then POST: customerInfoReducer', response);

        })
        .catch((error) => {
            console.log('error POST: customerInfoReducer', error);
        })


    }




    return(
        <>
        <h1>Checkout</h1>
        <div>
            <h3>Step 3: Checkout</h3>
            {/* <SelectPizza /> */}
        </div>

        <div>
           {pizzaAddReducer.map((pizza) => {
               return (
                   <div key={pizza.id}>
                       {pizza.name} : {pizza.description} {pizza.price}
        </div> 
               )
           })}
        </div>

        

        <button onClick={handleCheckout}>Checkout</button>


        </>
    )
}// end Checkout


export default Checkout;