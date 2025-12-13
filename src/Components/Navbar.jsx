import React from 'react'
import logo from '../assets/Logo2.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fondo-navbar navbar shadow-sm py-2">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto">

                <li className="nav-item item-hover">
                    {/* <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a> */}
                    <Link to="/" className='nav-link active text-white' aria-current="page">Inicio</Link> 
                </li>

                <li className="nav-item item-hover">
                    <Link  to="/" className="nav-link text-white" href="#">Tienda</Link>
                </li>

                <li className="nav-item item-hover dropdown">
                    <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul className="dropdown-menu text-center roboto"> 
                        {/** Por ahora hardcodeo, luego sacamos categorias por Context Api */}
                        <li><a className="dropdown-item" href="#">Enduro</a></li>
                        <li><a className="dropdown-item" href="#">Street</a></li>
                        <li><a className="dropdown-item" href="#">Naked</a></li>
                        <li><a className="dropdown-item" href="#">Scooter</a></li>
                        <li><a className="dropdown-item" href="#">Touring</a></li>
                        <li><a className="dropdown-item" href="#">CUB</a></li>
                        <li><a className="dropdown-item" href="#">Motard</a></li>
                        <li><a className="dropdown-item" href="#">Supersport</a></li>
                    </ul>
                </li>

                 <li className="nav-item item-hover">
                    <a className="nav-link text-white" href="#">Motos Destacadas</a>
                </li>

                 <li className="nav-item item-hover">
                    <a className="nav-link text-white" href="#">Motos Usadas</a>
                </li>

                 <li className="nav-item item-hover">
                    <a className="nav-link text-white" href="#">Ofertas</a>
                </li>

                <li className="nav-item item-hover dropdown">
                    <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Accesorios
                    </a>
                    <ul className="dropdown-menu">
                        {/** Por ahora hardcodeo, luego sacamos categorias por Context Api */}
                        <li><a className="dropdown-item" href="#">Guantes</a></li>
                        <li><a className="dropdown-item" href="#">Cascos</a></li>
                        <li><a className="dropdown-item" href="#">Indumentaria</a></li>
                        <li><a className="dropdown-item" href="#">Accesorios para la moto</a></li>
                        <li><a className="dropdown-item" href="#">Calzado</a></li>
                        <li><a className="dropdown-item" href="#">Repuestos</a></li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
