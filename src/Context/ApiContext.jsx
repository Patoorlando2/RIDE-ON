import { createContext, useContext, useEffect, useState } from "react";

const API_URL = 'http://127.0.0.1:8000/api/productos';
const API_ACCESORIOS = 'http://localhost:8000/api/accesorios';
const API_CATEGORIAS = 'http://localhost:8000/api/categorias';

const ApiContext = createContext();

export const useApiContext = () => {

    return useContext(ApiContext);
};

export const ApiProvider = ({children}) => {

    // Estados donde guardo los datos de la API
    const [productosData, setProductosData] = useState([]);
    const [accesoriosData, setAccesoriosData] = useState([]);
    const [categoriasData, setCategoriasData] = useState([]);

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

    const fetchCategorias = async () => {
        try {
            const response = await fetch(API_CATEGORIAS);
            if (!response.ok) {
                throw new Error(`Error en la api: ${response.status}`);
            }
            const json = await response.json();
            setCategoriasData(json);
        } catch (err) {
            setError(err.message);
            setCategoriasData([]);
        }
    };



    useEffect(() => {
        const cargarTodo = async () => {
            setCargando(true);
            await fetchProductos();
            await fetchAccesorios();
            await fetchCategorias();
            setCargando(false);
        };
        cargarTodo();
    }, []);


    const values = {
        productos: productosData,
        accesorios: accesoriosData,
        categorias: categoriasData,
        cargando,
        error
    };

    return (
        <ApiContext.Provider value={values}>
            {children}
        </ApiContext.Provider>
    );
};