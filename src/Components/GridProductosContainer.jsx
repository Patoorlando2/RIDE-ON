import React from 'react'
import { useApiContext } from '../Context/ApiContext'
import Grid from './Grid';


function GridProductosContainer({ filtros }) {

  const { productos, cargando, error } = useApiContext();

  if (cargando) return <div className="text-center mt-5">Cargando productos...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error al cargar: {error}</div>;
  if (!productos) return null;

  // const filtrar = (prd) => {
  //   if (filtros.estado && prd.estado !== filtros.estado) return false;
  //   if (filtros.categoria && prd.categoria !== filtros.categoria) return false;
  //   if (filtros.precioMin && prd.precio < filtros.precioMin) return false;
  //   if (filtros.precioMax && prd.precio > filtros.precioMax) return false;
  //   if (filtros.marca && !prd.marca.toLowerCase().includes(filtros.marca.toLowerCase())) return false;
  //   if (filtros.modelo && !prd.modelo.toLowerCase().includes(filtros.modelo.toLowerCase())) return false;
  //   if (filtros.anio && prd.anio !== filtros.anio) return false;
  //   if (filtros.oferta && !prd.oferta) return false;
  //   return true;
  // };

  // const productosFiltrados = productos.filter(filtrar);

  return <Grid productos={productos} />;
}

export default GridProductosContainer;
