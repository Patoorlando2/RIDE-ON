import React from 'react'
import { useApiContext } from '../Context/ApiContext'
import GridProductos from './GridProductos';

function GridProductosContainer() {

    const {productos, cargando, error} = useApiContext();


    if (cargando) {
        return <div className="text-center mt-5">Cargando productos...</div>;
    }
    
    if (error) {
        return <div className="text-center mt-5 text-danger">⚠️ Error al cargar: {error}</div>;
    }

    if (!productos || productos.length === 0) {
        return <div className="text-center mt-5">No se encontraron productos destacados.</div>;
    }

  return (
    <GridProductos productos={productos} />
  )
}

export default GridProductosContainer
