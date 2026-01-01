import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

  //Agregar item al carrito
  const addItem = (producto) => {
    setCarrito(prev => {
      // si el producto ya está, solo actualizo cantidad
      const existe = prev.find(item => item.id === producto.id);

      if (existe) {
        return prev.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad } : item
        );
      }

      return [...prev, producto];
    });
  };

  //  Eliminar un item por ID
  const removeItem = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  //  Vaciar carrito
  const resetCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, addItem, removeItem, resetCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
