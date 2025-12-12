import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { ApiProvider } from './Context/ApiContext'

function App() {

  return (
    <>
    <ApiProvider>
    <Routes>

      <Route path='/' element={<Home />} />
    
    </Routes>
    </ApiProvider>

    </>
  )
}

export default App
