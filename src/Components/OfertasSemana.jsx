function OfertasSemana({ title, accesorios = [], precioOferta, descuento }) {
  return (
    <div className="container py-5">
      {/* Título */}
      <div className="row mb-4">
        <div className="col text-center">
          <h2 className="fw-bold">
            🔥 {title}
          </h2>
          <p className="text-muted">
            Aprovechá estas ofertas de <b>accesorios</b> por tiempo limitado
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {accesorios.map((accesorio) => (
          <div key={accesorio.id_accesorio} className="col-12 col-sm-6 col-lg-3">

            <div className="card h-100 shadow-sm border-0">
              <div className="ratio ratio-1x1">
                <img
                  src={accesorio.imagen.url_completa}
                  alt={accesorio.nombre_accesorio}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">{accesorio.nombre_accesorio}</h5>

                {/* Precios */}
                <div className="d-flex flex-column">
                  <span className="text-decoration-line-through text-danger">
                    ${parseInt(accesorio.precio)}
                  </span>
                  <div>
                      <span className="text-success">
                     ${parseInt(precioOferta(accesorio.precio, descuento).toFixed(2))}
                  </span>
                  <span className="badge bg-success ms-2 w-30 ms-4">
                    -{descuento}%
                  </span>
                  </div>
                   
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
