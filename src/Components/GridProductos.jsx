import React from 'react'
import { Link } from 'react-router-dom'

function GridProductos({productos}) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-5">
      {productos.map((moto) => (
        <div className="col" key={moto.id_producto}>
          <div className="card h-100 shadow-sm border-0 position-relative">
            {/* Badge de Oferta */}
            {moto.oferta && (
              <span className="position-absolute top-0 start-0 m-2 badge rounded-pill bg-danger">
                Oferta 🔥
              </span>
            )}
            
            <img 
              src={moto.imagen.url_completa} 
              className="card-img-top p-2" 
              alt={moto.nombre_producto}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            
            <div className="card-body d-flex flex-column">
              <h6 className="card-title fw-bold">{moto.nombre_producto}</h6>
              <p> {moto.estado} </p>
              <p className="card-text text-dark fw-bold fs-5 mt-auto">
                ${parseInt(moto.precio)}
              </p>
              <Link to={`/producto/${moto.id_producto}`} className="btn btn-outline-primary btn-sm w-100 mt-2">
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
      
    
  )
}

export default GridProductos
