import {useState} from 'react';
import axios from 'axios';



function AddCustomerInfo(){
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [delTakeout, setDelTakeout] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        console.log('submit button pushed')
        axios.post('/api/order', {customer_name : name, street_address : address, city: city, zip: zip, type: delTakeout })
            .then(response =>{                                                                          
            ();
            })
    }

    return (
        <> 
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handleSubmit} className="addCustomerInfo">
          <input 
            required 
            placeholder="Name" 
            value={name}
            onChange={(event) => setName(event.target.value)}/>
         <input 
            required 
            placeholder="Street Address" 
            value={address}
            onChange={(event) => setAddress(event.target.value)}/>
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
        <input type="radio" id="delivery" name="delTakeout" value="delivery" onChange={(event) => setdelTakeout(event.target.value)}/>
        <label for="delivery">Delivery</label><br></br>
        <input type="radio" id="takeout" name="delTakeout" value="takeOut" onChange={(event) => setdelTakeout(event.target.value)}/>
        <label for="takeout">Take Out</label><br></br>
        <button type="submit">NEXT</button>
        </form>
      </>
    )
}

export default AddCustomerInfo;