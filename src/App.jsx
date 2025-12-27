import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { ApiProvider } from './Context/ApiContext'
import Tienda from './Pages/Tienda'
import DetalleProducto from './Pages/DetalleProducto'
import { CarritoProvider } from './Context/CarritoContext'

function App() {

  return (
    <>
    <CarritoProvider>
    <ApiProvider>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Tienda' element={<Tienda />} />
      <Route path='/producto/:id' element={<DetalleProducto />} />

    </Routes>
    </ApiProvider>
    </CarritoProvider>

    </>
  )
}

export default App
