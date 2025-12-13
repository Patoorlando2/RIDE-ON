import React from 'react'
import logo from '../assets/Logo2.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
   <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo de la empresa" height={120} />
                </Link>
            </div>
        </div>
   </div>    
  )  
}

export default Header