import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { ApiProvider } from './Context/ApiContext'
import Tienda from './Pages/Tienda'
import DetalleProducto from './Pages/DetalleProducto'

function App() {

  return (
    <>
    <ApiProvider>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Tienda' element={<Tienda />} />
      <Route path='/producto/:id' element={<DetalleProducto />} />

    </Routes>
    </ApiProvider>

    </>
  )
}

export default App
