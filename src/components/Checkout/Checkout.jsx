import axios from 'axios';
import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import "./Checkout.css";



function Checkout() {

    const pizzaAddReducer = useSelector(store => store.pizzaAddReducer);

    const handleCheckout = () => {


    // POST or GET route in a function
    axios.post('/api/order', {pizzaAddReducer})
        .then((response) => {
            console.log('This is response in POST', response);
        })
        .catch((error) => {
            console.log('error in POST', error);
        })


    }




    return(
        <>
        <header className='Checkout-header'>CheckOut</header>
        <div>
            <h3>Step 3: Checkout</h3>
        </div>

        <div>
           {pizzaAddReducer}
        </div>

        

        <button onClick={handleCheckout}>Checkout</button>


        </>
    )
}// end Checkout


export default Checkout;