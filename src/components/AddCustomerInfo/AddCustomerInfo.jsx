import {useState} from 'react';
import {useDispatch} from 'react-redux'


function AddCustomerInfo(){
    const [customer_name, setCustomer_name] = useState('')
    const [street_address, setStreet_address] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [type, setType] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
          type: 'ADD_CUSTOMER_INFO',
          payload:{customer_name, street_address, city, zip, type}
        })
      }
    return (
        <> 
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handleSubmit} className="addCustomerInfo">
          <input 
            required 
            placeholder="Name" 
            value={customer_name}
            onChange={(event) => setCustomer_name(event.target.value)}/>
         <input 
            required 
            placeholder="Street Address" 
            value={street_address}
            onChange={(event) => setStreet_address(event.target.value)}/>
         <input 
            required 
            placeholder="City" 
            value={city}
            onChange={(event) => setCity(event.target.value)}/>
        <input 
            required 
            placeholder="Zip Code" 
            value={zip}
            onChange={(event) => setZip(event.target.value)}/>
        <input type="radio" id="delivery" name="type" value="delivery" onChange={(event) => setType(event.target.value)}/>
        <label form="delivery">Delivery</label>
        <input type="radio" id="takeout" name="type" value="takeOut" onChange={(event) => setType(event.target.value)}/>
        <label form="takeout">Take Out</label><br></br>
        <button type="submit">NEXT</button>
        </form>
      </>
    )
}

export default AddCustomerInfo;