import React from 'react'
import { Link } from 'react-router-dom';
import Itemlist from '../components/Itemlist';
import Navbar from '../components/Navbar';
import BackToTop from "react-back-to-top-button";

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
    <BackToTop className="Up-button"
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint">
        <span>scroll up</span>
      </BackToTop>
    </div>

  )
}

export default Homeitem