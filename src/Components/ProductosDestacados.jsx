import React from "react";
import { Link } from "react-router-dom";

function ProductosDestacados({ title, productos = [] }) {

  return (
    <>
      <div className="container p-5 text-center">
        <h2 className="fw-bold">{title}</h2>
      </div>

      <div className="container">
        <div className="row g-3">
          
          {productos.map((producto) => (
            <div className="col-12 col-md-6 col-lg-3" key={producto.id_producto}>
              <Link to={`/producto/${producto.id_producto}`}>
              <div className="card h-100">
                <img
                  src={producto.imagen.url_completa}
                  className="card-img-top"
                  alt={producto.nombre_producto}
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre_producto}</h5>
                  <p className="card-text">{producto.categoria.categoria}</p>
                  <strong>${parseInt(producto.precio)}</strong>
                </div>
              </div>
              </Link>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default ProductosDestacados
