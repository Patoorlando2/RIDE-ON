import React from 'react'
import { Link } from 'react-router-dom'

function Grid({productos, filtros, handleChange, limpiar}) {
  return (
    <div className="container">

      <div className="row">
        <div className="col-lg-12 mt-5 text-center fs-2 fw-400">
          Las motos más buscadas
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4 mb-4">
            {/* Filtro de productos*/}
            <div className="card border-0 shadow-lg p-3 mb-4 mt-5">
                <h5 className="fw-bold mb-4 text-center">Filtros de Búsqueda</h5>

                {/* Estado */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Estado</label>

                    <div className="form-check">
                    <input 
                        className="form-check-input"
                        type="radio"
                        name="estado"
                        id="nuevo"
                        value="nueva"
                        checked={filtros.estado === "nueva"}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="nuevo">Nuevo</label>
                    </div>

                    <div className="form-check">
                    <input 
                        className="form-check-input"
                        type="radio"
                        name="estado"
                        id="usado"
                        value="usado"
                        checked={filtros.estado === "usado"}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="usado">Usado</label>
                    </div>
                </div>

                {/* Categoría */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Categoría</label>
                    <select 
                    className="form-select"
                    name="categoria"
                    value={filtros.categoria}
                    onChange={handleChange}
                    >
                    <option value="">Seleccionar</option>
                    <option value="Enduro">Enduro</option>
                    <option value="Street">Street</option>
                    </select>
                </div>

                {/* Precio */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Rango de Precio</label>
                    <div className="d-flex align-items-center gap-2">
                    <input 
                        type="number"
                        className="form-control"
                        placeholder="Min"
                        name="precioMin"
                        value={filtros.precioMin}
                        onChange={handleChange}
                    />
                    <span>-</span>
                    <input 
                        type="number"
                        className="form-control"
                        placeholder="Max"
                        name="precioMax"
                        value={filtros.precioMax}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                {/* Marca y modelo */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Marca</label>
                    <input 
                    type="text"
                    className="form-control mb-2"
                    name="marca"
                    value={filtros.marca}
                    onChange={handleChange}
                    />

                    <label className="form-label fw-bold">Modelo</label>
                    <input 
                    type="text"
                    className="form-control"
                    name="modelo"
                    value={filtros.modelo}
                    onChange={handleChange}
                    />
                </div>

                {/* Año */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Año</label>
                    <select 
                    className="form-select"
                    name="anio"
                    value={filtros.anio}
                    onChange={handleChange}
                    >
                    <option value="">Todos</option>
                    <option>2024</option>
                    <option>2023</option>
                    </select>
                </div>

                {/* Oferta */}
                <div className="mb-4 border-top pt-3">
                    <div className="form-check form-switch">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        id="oferta"
                        name="oferta"
                        checked={filtros.oferta}
                        onChange={handleChange}
                    />
                    <label className="form-check-label fw-bold text-danger" htmlFor="oferta">
                        Solo en Oferta 🔥
                    </label>
                    </div>
                </div>

                <div className="d-grid gap-2">
                    {/* <button className="btn btn-primary">Aplicar Filtros</button> */}
                    <button className="btn btn-link btn-sm text-muted" onClick={limpiar}>
                    Limpiar filtros
                    </button>
                </div>
            </div>
        </div>


        <div className="col-lg-8 col-md-8">
          {/* grid de los productos */}
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
        </div>
       </div>
    </div>
    //
  )
}

export default Grid
