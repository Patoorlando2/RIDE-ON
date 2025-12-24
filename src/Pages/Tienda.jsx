import React from 'react'
import TopBar from '../Components/TopBar'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import tornado from '../assets/honda-xr-300-tornado.jpg'
import Footer from '../Components/Footer'
import NavbarContainer from '../Components/NavbarContainer'
import ProductosFilter from '../Components/ProductosFilter'
import GridProductosContainer from '../Components/GridProductosContainer'



const images = [
  {src: tornado, alt: "Honda XR tornado 300"},
]


function Tienda() {
  return (
    <>
    <TopBar />
    <Header />
    <NavbarContainer />
    <Carousel images={images} height = {700} />
    {/** Acá entrearia filtro y prodcutos grid */}
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-5 text-center fs-2 fw-400">
          Las motos más buscadas
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 mb-4">
            <ProductosFilter />
        </div>
        <div className="col-lg-8 col-md-8">
          <GridProductosContainer />
        </div>
      </div>
    </div>
    <Footer /> 
    </>
  )
}

export default Tienda
