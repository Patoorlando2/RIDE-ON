import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { ApiProvider } from './Context/ApiContext'
import Tienda from './Pages/Tienda'

function App() {

  return (
    <>
    <ApiProvider>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Tienda' element={<Tienda />} />
    
    </Routes>
    </ApiProvider>

    </>
  )
}

export default App
