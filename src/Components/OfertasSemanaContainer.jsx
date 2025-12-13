import React, { useState } from 'react'
import OfertasSemana from './OfertasSemana'
import { useApiContext } from '../Context/ApiContext'
function OfertasSemanaContainer() {

    const {accesorios, cargando, error} = useApiContext();
    const DESCUENTO = 20;

    // filtrar por ofertas
    const AccesoriosFiltrados = accesorios.filter(a => a.destacados === 1).slice(0,8);

    const precioConDescuento = (precio, porcentaje) => {
      return precio - (precio * porcentaje) / 100;
    }

    if (cargando) {
      return <div className="text-center mt-5">Cargando productos...</div>;
    }
    
    if (error) {
        return <div className="text-center mt-5 text-danger">⚠️ Error al cargar: {error}</div>;
    }

    if (AccesoriosFiltrados.length === 0) {
        return <div className="text-center mt-5">No se encontraron accesorios de motos.</div>;
    }

  return <OfertasSemana title={"Ofertas de la semana"} accesorios={AccesoriosFiltrados} precioOferta={precioConDescuento} descuento={DESCUENTO}  />
}

export default OfertasSemanaContainer
