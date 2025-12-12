import { createContext, useContext, useEffect, useState } from "react";
import ProductosDestacados from "../Components/ProductosDestacados";


const API_URL = 'http://127.0.0.1:8000/api/productos';

const ApiContext = createContext();

export const useApiContext = () => {

    return useContext(ApiContext);
};

export const ApiProvider = ({children}) => {

    // Estados donde guardo los datos de la API
    const [productosData, setProductosData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchProductos = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Error en la respuesta de la red: ${response.status}`);
                }
                const responseData = await response.json();

                if (responseData && Array.isArray(responseData.data)) {
                    setProductosData(responseData.data);
                } else {
                    setProductosData([]);
                    throw new Error("La estructura de la API es incorrecta.");
                }
                setError(null);
            } catch (err) {
                setError(err.message);
                setProductosData([]);
            } finally {
                setCargando(false);
            }
        }
        fetchProductos();
    }, []);


    const values = {productos: productosData, cargando,error};

    return (
        <ApiContext.Provider value={values}>
            {children}
        </ApiContext.Provider>
    );

};