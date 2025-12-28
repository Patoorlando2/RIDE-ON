import React, { useState } from 'react'
import { useApiContext } from '../Context/ApiContext'
import Grid from './Grid';


function GridProductosContainer() {

  // los datos de productos - el valor de cargando y error
  const { productos, cargando, error } = useApiContext();

  // Estado inicial de los filtros. En lugar de escribir un useState uno por uno se crean los objetos
  const [filtros, setFiltros] = useState({
    estado: "",
    categoria: "",
    precioMin: "",
    precioMax: "",
    marca: "",
    modelo: "",
    anio: "",
    oferta: false
  });

  // función para manejar los cambios en todos los inputs
  const handleChange = (e) => {

    const {name, value, type, checked} = e.target;
 
    // Agregando con variable computada
    setFiltros({
      ...filtros,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  //función para limpiar filtros - vaciar filtros con setFiltros
  const limpiarFiltros = () => {
    setFiltros({
      estado: "", categoria: "", precioMin: "", precioMax: "",
      marca: "", modelo: "", anio: "", oferta: false
    });
  };


  if (cargando) return <div className="text-center mt-5">Cargando productos...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error al cargar: {error}</div>;
  // if (!productos) return null;

  // Lógica del filtrado
  const productosFiltrados = productos.filter(moto => {
    return (
      (filtros.estado === "" || moto.estado.toLowerCase() === filtros.estado.toLowerCase()) &&
      (filtros.categoria === "" || moto.categoria.categoria === filtros.categoria) &&
      (filtros.marca === "" || moto.marca.toLowerCase().includes(filtros.marca.toLowerCase())) &&
      (filtros.modelo === "" || moto.modelo.toLowerCase().includes(filtros.modelo.toLowerCase())) &&
      (filtros.anio === "" || moto.anio.toString() === filtros.anio) &&
      (filtros.oferta ? moto.oferta === true : true) &&
      (filtros.precioMin === "" || moto.precio >= parseFloat(filtros.precioMin)) &&
      (filtros.precioMax === "" || moto.precio <= parseFloat(filtros.precioMax))
    );
  });


  return <Grid productos={productosFiltrados} filtros={filtros} handleChange={handleChange} limpiar={limpiarFiltros} />;
}

export default GridProductosContainer;
