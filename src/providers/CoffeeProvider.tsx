import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import CoffeeBook from '../containers/CoffeeBook';
import coffees from "../db/coffees.json"
import { $fetch_data } from '../redux/coffee.reducer';

interface CoffeeContextState {
    darkMode: boolean,
    setDarkMode: (mode: boolean) => void,
    loading: boolean,
    setLoading: (loading: boolean) => void
}

const contextDefaultValues: CoffeeContextState = {
    darkMode: false,
    setDarkMode: () => { },
    loading: false,
    setLoading: () => { }
};

export const CoffeeContext = createContext<CoffeeContextState>(
    contextDefaultValues
);
export const useCoffeeContext = (): CoffeeContextState => useContext(CoffeeContext)

export const CoffeeProvider: React.FC = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch($fetch_data(coffees))
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            setLoading(true)
        }
    }, [dispatch])
    return (
        <CoffeeContext.Provider value={{ darkMode, setDarkMode, loading, setLoading }}>
            {children}
        </CoffeeContext.Provider>
    )
}
