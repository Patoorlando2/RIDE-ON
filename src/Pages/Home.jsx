import React from 'react'
import TopBar from '../Components/TopBar'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import PDescatadosContainer from '../Components/PDescatadosContainer'
import Newsletter from '../Components/Newsletter'
import OfertasSemanaContainer from '../Components/OfertasSemanaContainer'

import bannerEnduro from "../assets/skua.jpg";
import bannerStreet from "../assets/banner-s2.jpeg";
import wallpaper from "../assets/wallpaper.jpg";

const images = [
  { src: wallpaper, alt: "Wallpaper" },
  { src: bannerEnduro, alt: "Enduro" },
  { src: bannerStreet, alt: "Street" },
];


function Home() {
  return (
    <>
    <TopBar/>
    <Header />
    <Navbar />
    <Carousel images={images} height={700} />
    <PDescatadosContainer />
    <OfertasSemanaContainer />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home
