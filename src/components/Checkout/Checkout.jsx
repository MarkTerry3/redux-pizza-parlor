import React from 'react';
import ProductList from '../ProductList/ProductList';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import "./Checkout.css";



function Checkout() {


    const handleCheckout = () => {


    // POST or GET route in a function


    }




    return(
        <>
        <header className='App-header'>CheckOut</header>
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