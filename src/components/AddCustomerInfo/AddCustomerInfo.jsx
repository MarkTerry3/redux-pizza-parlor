import {useState} from 'react';
import {useDispatch} from 'react-redux'



function AddCustomerInfo(){
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [delTakeout, setDelTakeout] = useState('')
    const dispatch = useDispatch();
    let [customerToAdd, setCustomerToAdd] = useState({})


    const handleSubmit = event => {

        event.preventDefault();
        console.log (customerToAdd)
        console.log (name)
        dispatch({
          type: 'ADD_CUSTOMER_INFO',
          payload:{name, address, city, zip, delTakeout}
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
        <input type="radio" id="delivery" name="delTakeout" value="delivery" onChange={(event) => setDelTakeout(event.target.value)}/>
        <label form="delivery">Delivery</label>
        <input type="radio" id="takeout" name="delTakeout" value="takeOut" onChange={(event) => setDelTakeout(event.target.value)}/>
        <label form="takeout">Take Out</label><br></br>
        <button type="submit">NEXT</button>
        </form>
      </>
    )
}

export default AddCustomerInfo;