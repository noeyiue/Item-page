import React from 'react'

const Itemlist = ({ item }) => {
  return (
    <div className="center item user">
        <button>
            <p className= "small-size"> Barcode : {item.id} </p>
            <h2 className = "center"> {item.Name} </h2> 
            <p> price : {item.Price} </p> 
        </button>
    </div>)
}

export default Itemlist