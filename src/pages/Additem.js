import React from 'react'
import { Link } from 'react-router-dom'
import Navhome from '../components/Navbar'

function Additem() {
  return (
    <>
      <Navhome />
      <div className="Add-Item">
        <h1>Add item</h1>
        <div className="fixed-top-content">
              <Link to={`/Homeitem`}>
                  <img src={require('../image/previous.png')} alt='Previous' className='fix-button'/>
              </Link>
        </div>
      </div>
      <div className="Scan-input">
        <input className="Small-input" type="number" placeholder="Barcode Number" />
        <Link to={`/BarcodeScanner`}>
          <img src={require('../image/scanbarcode.png')} alt='Previous'/>
        </Link>
      </div>
      <div className="Add-Item">
        <div className="Des-Item">
          <input className="Small-input" type="text" placeholder="ชื่อสินค้า" />
          <input className="Small-input" type="number" placeholder="ราคา" />
          <input className="Big-input" type="text" placeholder="รายละเอียดเพิ่มเติม" />
        </div>
        <div className="Add-Item">
          <button className="btn-save">SAVE</button>
          <button className="btn-delete">DELETE</button>
        </div>
      </div>
    </>
  )
}

export default Additem