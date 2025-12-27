import React from 'react'

function ProductosFilter({ filtros, setFiltros }) {

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFiltros(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Limpiar filtros
  const limpiar = () => {
    setFiltros({
      estado: "",
      categoria: "",
      precioMin: "",
      precioMax: "",
      marca: "",
      modelo: "",
      anio: "",
      oferta: false,
    });
  };

  return (
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
        <button className="btn btn-primary">Aplicar Filtros</button>
        <button className="btn btn-link btn-sm text-muted" onClick={limpiar}>
          Limpiar filtros
        </button>
      </div>
    </div>
  )
}

export default ProductosFilter
