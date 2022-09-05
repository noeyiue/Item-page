// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

import React, { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'

function Itemlist() {
    function handleChange(event) {
        console.log(event.target.value);
      }

  return (
    <div className="App">
        <h1>Itemlist</h1>
        <input type="text" placeholder="Search..." onChange={handleChange} />
        {JSONDATA.map((val, key) => {
            return (
                <div className="item user" key={key}>
                    <button variant="primary">
                        <p className= "small-size"> Barcode : {val.id} </p>
                        <h2 className = "center"> {val.Name} </h2> 
                        <p> price : {val.Price} </p> 
                     </button>
                </div>)
        })}

    </div>
  )
}

export default Itemlist