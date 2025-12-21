import React from 'react'

function ProductosFilter() {

  return (
   
    <div className="card border-0 shadow-lg p-3 mb-4 mt-5">
      <h5 className="fw-bold mb-4 text-center">Filtros de Búsqueda</h5>

      {/* Estado */}
      <div className="mb-4">
        <label className="form-label fw-bold">Estado</label>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="estado" id="nuevo" />
          <label className="form-check-label" htmlFor="nuevo">Nuevo</label>
        </div>
        <div className="form-check">
          <input class="form-check-input" type="radio" name="estado" id="usado" />
          <label class="form-check-label" htmlFor="usado">Usado</label>
        </div>
      </div>

      {/* Categoría */}
      <div className="mb-4">
        <label className="form-label fw-bold">Categoría</label>
        <select className="form-select">
          <option>Seleccionar</option>
          <option>Enduro</option>
          <option>Street</option>
        </select>
      </div>

      {/* Precio */}
      <div className="mb-4">
        <label className="form-label fw-bold">Rango de Precio</label>
        <div className="d-flex align-items-center gap-2">
          <input type="number" className="form-control" placeholder="Min" />
          <span>-</span>
          <input type="number" className="form-control" placeholder="Max" />
        </div>
      </div>

      {/* Marca y Modelo */}
      <div className="mb-4">
        <label className="form-label fw-bold">Marca</label>
        <input type="text" className="form-control mb-2" placeholder="Ej: Honda" />
        <label className="form-label fw-bold">Modelo</label>
        <input type="text" className="form-control" placeholder="Ej: XR 300" />
      </div>

      {/* Año */}
      <div className="mb-4">
        <label className="form-label fw-bold">Año</label>
        <select className="form-select">
          <option>Todos</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>

      {/* Oferta con Switch */}
      <div className="mb-4 border-top pt-3">
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="oferta" />
          <label className="form-check-label fw-bold text-danger" htmlFor="oferta">
            Solo en Oferta 🔥
          </label>
        </div>
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-primary">Aplicar Filtros</button>
        <button className="btn btn-link btn-sm text-muted">Limpiar filtros</button>
      </div>
    </div>
    
    )
}

export default ProductosFilter
