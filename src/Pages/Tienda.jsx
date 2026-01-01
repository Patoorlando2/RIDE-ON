import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import tornado from '../assets/honda-xr-300-tornado.jpg'
import Footer from '../Components/Footer'
import NavbarContainer from '../Components/NavbarContainer'
import ProductosFilter from '../Components/ProductosFilter'
import GridProductosContainer from '../Components/GridProductosContainer'
import Grid from '../Components/Grid'



const images = [
  {src: tornado, alt: "Honda XR tornado 300"},
]


function Tienda() {

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

  return (
    <>
    <TopBar />
    <Header />
    <NavbarContainer />
    <Carousel images={images} height = {700} />
    {/** Acá entrearia filtro y prodcutos grid */}
    <GridProductosContainer />
    <Footer /> 
    </>
  )
}

export default Tienda
