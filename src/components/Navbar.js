import React from "react"

const Navbar = () => {
  return (
    <nav className="fixed-top">
      <img src={require('../image/posme.png')} alt='logo'/>
      <button className="btn-logout">
        logout
      </button>
    </nav>
  )
}

export default Navbar