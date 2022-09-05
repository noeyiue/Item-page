import React from 'react'
import { Link } from 'react-router-dom';
import Itemlist from '../components/Itemlist';
import Navbar from '../components/Navbar';

function Homeitem() {
  return (
    <div className='Home-item'>
        <div>
            <Navbar />
            <Itemlist />
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

  )
}

export default Homeitem