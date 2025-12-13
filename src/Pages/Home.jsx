import React from 'react'
import TopBar from '../Components/TopBar'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import PDescatadosContainer from '../Components/PDescatadosContainer'
import Newsletter from '../Components/Newsletter'
import OfertasSemanaContainer from '../Components/OfertasSemanaContainer'

function Home() {
  return (
    <>
    <TopBar/>
    <Header />
    <Navbar />
    <Carousel />
    <PDescatadosContainer />
    <OfertasSemanaContainer />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home
