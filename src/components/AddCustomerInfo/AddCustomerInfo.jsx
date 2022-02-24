import {useState} from 'react';
import axios from 'axios';



function AddCustomerInfo(){
    const [name, setName] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        console.log('submit button pushed')
        axios.post('/artist', {})
            .then(response =>{                                                                          
            refreshArtists();
            })
    }



    return(
        <section>
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handleSubmit} className="add Artist">
          <input 
            required 
            placeholder="Name" 
            value={name}
            onChange={(event) => setCustomerName(event.target.value)}/>
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
        <input type="radio" id="delivery" value="Delivery"></input>
        <label for="delivery">Delivery</label><br></br>

          <button type="submit">NEXT</button>
        </form>
      </section>

    )
}

export default AddCustomerInfo