import { createContext, useContext, useEffect, useState } from "react";

const API_URL = 'http://127.0.0.1:8000/api/productos';
const API_ACCESORIOS = 'http://localhost:8000/api/accesorios';

const ApiContext = createContext();

export const useApiContext = () => {

    return useContext(ApiContext);
};

export const ApiProvider = ({children}) => {

    // Estados donde guardo los datos de la API
    const [productosData, setProductosData] = useState([]);
    const [accesoriosData, setAccesoriosData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


    const fetchProductos = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
            throw new Error(`Error en la respuesta de la red: ${response.status}`);
            }
            const json = await response.json();
            setProductosData(json.data ?? []);
        } catch (err) {
            setError(err.message);
            setProductosData([]);
        }
    };

    const fetchAccesorios = async () => {
        try {
            const response = await fetch(API_ACCESORIOS);
            if (!response.ok) {
            throw new Error(`Error en la respuesta de la red: ${response.status}`);
            }
            const json = await response.json();
            setAccesoriosData(json.data ?? []);
        } catch (err) {
            setError(err.message);
            setAccesoriosData([]);
        }
    };

    useEffect(() => {
        const cargarTodo = async () => {
            setCargando(true);
            await fetchProductos();
            await fetchAccesorios();
            setCargando(false);
        };
        cargarTodo();
    }, []);


    const values = {
        productos: productosData,
        accesorios: accesoriosData,
        cargando,
        error
    };

    return (
        <ApiContext.Provider value={values}>
            {children}
        </ApiContext.Provider>
    );
};