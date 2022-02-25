import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Admin(){
    const dispatch = useDispatch()

    
    axios({
        method: 'GET',
        url: '/api/order'
      }).then( response => {
        // response.data is array of orders
        console.log(response.data);
        dispatch({
          type: 'SET_PIZZA_ORDERS',
          payload: response.data

        })
      }).catch( error => {
        console.log('error on GET', error);
      });
    }

    return(




    )

}






export default Admin