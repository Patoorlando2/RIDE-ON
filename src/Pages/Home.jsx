import React from 'react'
import TopBar from '../Components/TopBar'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import PDescatadosContainer from '../Components/PDescatadosContainer'
import OfertasSemana from '../Components/OfertasSemana'
import Newsletter from '../Components/Newsletter'

function Home() {
  return (
    <>
    <TopBar/>
    <Header />
    <Navbar />
    <Carousel />
    <PDescatadosContainer />
    <OfertasSemana />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home
