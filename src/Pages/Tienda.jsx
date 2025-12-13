import React from 'react'
import TopBar from '../Components/TopBar'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import tornado from '../assets/honda-xr-300-tornado.jpg'
import Footer from '../Components/Footer'



const images = [
  {src: tornado, alt: "Honda XR tornado 300"},
]


function Tienda() {
  return (
    <>
    <TopBar />
    <Header />
    <Navbar />
    <Carousel images={images} height = {700} />
    <Footer /> 
    </>
  )
}

export default Tienda
