import React from 'react'
import { Link } from 'react-router-dom';
import Itemlist from '../components/Itemlist';
import Navbar from '../components/Navbar';

const mockItem1 = {
    id : 4495191705,
    Name: "Bagel - Whole White Sesame",
    Price : 91,
}

const mockItem2 = {
    id : 8748122467,
    Name: "Cookie Choc",
    Price : 62,
}

async function getItem() {
    const response = await fetch('http://167.71.195.231:2095/items')
    const items = await response.json()
    console.log(items)
    return items
}  


function Homeitem() {
    function handleChange(event) {
        console.log(event.target.value);
      }
    getItem();


  return (
    <>
        <Navbar />
        <div className='App Home-item'>
            <div className='center'>
                <h1 className='center'>Itemlist</h1>
                <input type="text" placeholder="Search..." onChange={handleChange} />
                <Itemlist item={mockItem1}/>
                <Itemlist item={mockItem2}/>
            </div>
            <div className="fixed-top-content">
                {/* <Link> */}
                    <img src={require('../image/previous.png')} alt='Previous' className='fix-button'/>
                {/* </Link> */}
            </div>
            <div className="fixed-bottom-content">
                <Link to={`/Additem`}>
                    <img src={require('../image/plus.png')} alt='Add' />
                </Link>
            </div>
        </div>
    </>

  )
}

export default Homeitem