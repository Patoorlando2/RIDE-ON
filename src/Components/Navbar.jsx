import { Link } from 'react-router-dom'

function Navbar({categoriasM,categoriasAcc}) {
  return (
    <nav className="navbar navbar-expand-lg fondo-navbar navbar shadow-sm py-2">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto">

                <li className="nav-item item-hover">
                    <Link to="/" className='nav-link active text-white' aria-current="page">Inicio</Link> 
                </li>

                <li className="nav-item item-hover">
                    <Link  to="/Tienda" className="nav-link text-white" href="#">Tienda</Link>
                </li>

                <li className="nav-item item-hover dropdown">
                    <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul className="dropdown-menu text-center roboto"> 
                        {/** Por ahora hardcodeo, luego sacamos categorias por Context Api */}
                        {categoriasM.map((c) => 
                            <li key={c.id_categoria}>
                                <Link to="#" className="dropdown-item">{c.categoria}</Link>
                            </li>
                        )}
                    </ul>
                </li>

                 <li className="nav-item item-hover">
                    <Link to="#" className="nav-link text-white">Motos Destacadas</Link>
                </li>

                 <li className="nav-item item-hover">
                    <Link className="nav-link text-white" to="#">Motos Usadas</Link>
                </li>

                 <li className="nav-item item-hover">
                    <Link className="nav-link text-white" to="#">Ofertas</Link>
                </li>

                <li className="nav-item item-hover dropdown">
                    <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Accesorios
                    </a>
                    <ul className="dropdown-menu">
                        {/** Por ahora hardcodeo, luego sacamos categorias por Context Api */}
                        {categoriasAcc.map((c) => 
                            <li key={c.id_categoria}>
                                <Link className="dropdown-item" to="#">{c.categoria}</Link>
                            </li>
                        )}
                        {/* <li><Link className="dropdown-item" to="#">Cascos</Link></li>
                        <li><Link className="dropdown-item" to="#">Indumentaria</Link></li>
                        <li><Link className="dropdown-item" to="#">Accesorios para la moto</Link></li>
                        <li><Link className="dropdown-item" to="#">Calzado</Link></li>
                        <li><Link className="dropdown-item" to="#">Repuestos</Link></li> */}
                    </ul>
                </li>
            </ul>
            <div>
                <i class="bi bi-cart text-white fs-4 p-3">0</i>
            </div>
            
            </div>
        </div>
    </nav>
  )
}

export default Navbar
