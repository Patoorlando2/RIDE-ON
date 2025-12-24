import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../Context/ApiContext';
import TopBar from '../Components/TopBar';
import NavbarContainer from '../Components/NavbarContainer';
import Footer from '../Components/Footer';
import Newsletter from '../Components/Newsletter';
import Header from '../Components/Header';

function DetalleProducto() {

    const {id} = useParams(); // el id que viene como parámetro de URL
    const { productos } = useApiContext();

    const producto = productos.find((p) => p.id_producto === parseInt(id));

    if (!producto) return <p>Producto no encontrado</p>;

  return (
    <>
    <TopBar />
    <Header />
    <NavbarContainer />
   <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={producto.imagen.url_completa} className="img-fluid rounded" alt={producto.nombre_producto} />
        </div>
        <div className="col-md-6">
          <h1>{producto.nombre_producto}</h1>
          <h2 className="text-dark">${parseInt(producto.precio)}</h2>
          <p className="lead">{producto.descripcion || "Sin descripción disponible."}</p>
          <hr />
          <p><strong>Estado:</strong> {producto.estado}</p>
          <p><strong>Categoria:</strong> {producto.categoria.categoria}</p>
          <button className="btn btn-success btn-lg">Agregar al carrito</button>
        </div>
      </div>
    </div>
    <br />
    <Newsletter />
    <Footer />
    </>
  )
}

export default DetalleProducto
