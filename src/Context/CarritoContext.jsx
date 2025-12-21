import React, { useContext } from 'react'
import { createContext } from 'react';

  const carritoContext = createContext();

export const useCarritoContext = () => {

    return useContext(carritoContext);
}

export const CarritoContext = () => {

    [item, setItem] = useState()
    [carrito, setCarrito] = useState([])

  const addItem = () => {  
  }

  const removeItem = () => {

  }

  const resetItem = () => {

    setCarrito([])

  }

}

  return (
    <div>
      
    </div>
  )

export default CarritoContext
