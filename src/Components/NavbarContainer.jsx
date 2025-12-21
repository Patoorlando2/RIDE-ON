import React, { useState } from 'react'
import Navbar from './Navbar';
import { useApiContext } from '../Context/ApiContext';


function NavbarContainer() {

    // const [carrito, setCarrito] = useState(0);

    const {categorias, error, cargando} = useApiContext();

    const categoriasMoto = categorias.filter(p => p.tipo == "moto");
    const categoriasAcc = categorias.filter(p => p.tipo == "accesorio");


     if (cargando) {
      return <div className="text-center mt-5">Cargando productos...</div>;
    }
    
    if (error) {
        return <div className="text-center mt-5 text-danger">⚠️ Error al cargar: {error}</div>;
    }

    if (categorias.length === 0) {
        return <div className="text-center mt-5">No se encontraron accesorios de motos.</div>;
    }
    
  return (

    <Navbar categoriasM={categoriasMoto} categoriasAcc={categoriasAcc} />
  )
}

export default NavbarContainer
