function OfertasSemana({ title, productos = [] }) {
  return (
    <div className="container py-5">
      {/* Título */}
      <div className="row mb-4">
        <div className="col text-center">
          <h2 className="fw-bold">
            🔥 {title}
          </h2>
          <p className="text-muted">
            Aprovechá estas ofertas por tiempo limitado
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {productos.map((producto) => (
          <div key={producto.id_producto} className="col-12 col-sm-6 col-lg-3">

            <div className="card h-100 shadow-sm border-0">
              <div className="ratio ratio-1x1">
                <img
                  src={producto.imagen.url_completa}
                  alt={producto.nombre_producto}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">{producto.nombre_producto}</h5>

                <p className="text-muted mb-1">{producto.categoria.categoria}</p>

                {/* Precios */}
                <div className="d-flex flex-column">
                  <span className="text-decoration-line-through text-danger">
                    {producto.precio}
                  </span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default OfertasSemana;
