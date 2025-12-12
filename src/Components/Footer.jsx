 
 import React from 'react'
 import logo from '../assets/logo-rideon.png'
 
 function Footer() {
   return (

    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">

        <div className="row">

          {/* Logo del proyecto */}
          <div className="col-md-4 mb-4 d-flex flex-column align-items-start">
            <img 
              src={logo} 
              alt="logo rideon" 
              style={{ height: "55px" }} 
              className="mb-3"
            />
            <p className="text-secondary">
              El mejor servicio de consesionario de motos y post-venta de todo el país.
            </p>
          </div>

          {/* Enlaces */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Plataforma</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Buscar Motos</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Accesorios</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Contacto</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Compañía</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Sobre nosotros</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Términos y condiciones</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Política de privacidad</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contacto</h6>
            <ul className="list-unstyled text-secondary">
              <li><i className="bi bi-envelope me-2"></i> soporte@rideon.com</li>
              <li><i className="bi bi-geo-alt me-2"></i> Ciudad Autónoma Buenos Aires,Argentina.</li>
            </ul>

            {/* Redes */}
            <div className="mt-3">
              <a href="#" className="text-secondary me-3 fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-secondary me-3 fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-secondary me-3 fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center text-secondary">
          © {new Date().getFullYear()} Ride-On — Todos los derechos reservados.
        </div>

      </div>
    </footer>
    
   )
 }
 
 export default Footer
 
 
 