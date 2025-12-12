import React from 'react'
import logo from '../assets/Logo2.png';

function Header() {
  return (
   <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <img src={logo} alt="Logo de la empresa" height={120} />
            </div>
        </div>
   </div>    
  )  
}

export default Header