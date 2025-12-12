import React from 'react';
import ProductosDestacados from './ProductosDestacados'
import { useApiContext } from '../Context/ApiContext';

function PDescatadosContainer() {

    const {productos, cargando, error} = useApiContext();

    // filtrado de datos
    const productosDestacados = productos
        .filter(p => p.destacados)
        .slice(0, 4);


    if (cargando) {
        return <div className="text-center mt-5">Cargando productos...</div>;
    }
    
    if (error) {
        return <div className="text-center mt-5 text-danger">⚠️ Error al cargar: {error}</div>;
    }

    if (productosDestacados.length === 0) {
        return <div className="text-center mt-5">No se encontraron productos destacados.</div>;
    }

  return (
    <ProductosDestacados title={"🔥 Nuestras Motos Destacadas"} productos={productosDestacados} />      
  )
}

export default PDescatadosContainer
