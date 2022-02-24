import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import "./Checkout.css";
import Axios from 'axios';
import axios from 'axios';



function Checkout() {

    const customerInfoReducer = useSelector(store => store.customerInfoReducer);
    const pizzaChoiceReducer = useSelector(store => store.pizzaChoiceReducer);


    const handleCheckout = () => {


        // POST for customerInfoReducer
    axios.post('/api/order', {customerInfoReducer})
        .then((response) => {
            console.log('in .then POST: customerInfoReducer', response);

        })
        .catch((error) => {
            console.log('error POST: customerInfoReducer', error);
        })


        
        //POST for pizzaChoiceReducer
    axios.post('/api/pizza', {pizzaChoiceReducer})
        .then((response) => {
            console.log('in .then POST: pizzaChoiceReducer', response);
        })
        .catch((error) => {
            console.log('error POST: pizzaChoiceReducer', error);
        })
    


    }




    return(
        <>
        <h1>Checkout</h1>
        <div>
            <h3>Step 3: Checkout</h3>
        </div>

        <div>
            //customer Info goes here
        </div>

        

        <button onClick={handleCheckout}>Checkout</button>


        </>
    )
}// end Checkout


export default Checkout;