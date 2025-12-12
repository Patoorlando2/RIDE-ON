import React, { useState } from 'react'
import OfertasSemana from './OfertasSemana'
import { useApiContext } from '../Context/ApiContext'
function OfertasSemanaContainer() {

    const {productos, cargando, error} = useApiContext();

    // filtrar por ofertas
    const productosOfertas = productos.filter( p => p.ofertas == 1); // filtrar por productos que valen menos que 3.5M

      if (cargando) {
        return <div className="text-center mt-5">Cargando productos...</div>;
    }
    
    if (error) {
        return <div className="text-center mt-5 text-danger">⚠️ Error al cargar: {error}</div>;
    }

    if (productosOfertas.length === 0) {
        return <div className="text-center mt-5">No se encontraron productos destacados.</div>;
    }

  return <OfertasSemana title={"Ofertas de la semana"} productos={productosOfertas} />
}

export default OfertasSemanaContainer
