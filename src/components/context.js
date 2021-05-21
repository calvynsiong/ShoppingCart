import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from '../data'
import reducer from './reducer'



// const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()






const AppProvider = ({ children }) => {


    const defaultState = {
        loading: false,
        cart: (localStorage.getItem("cartItemsList") === null) ? cartItems : JSON.parse(localStorage.getItem("cartItemsList")),
        total: 0,
        amount: 0,
    }


    const [state, dispatch] = useReducer(reducer, defaultState)


    useEffect(() => {
        dispatch({ type: "GETTOTAL" })
        dispatch({ type: "updateLocalStorage", payload: state.cart })

    }, [state.cart])

    const clearCart = () => {
        dispatch({ type: "CLEAR" })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE", payload: id })

    }
    const increaseItem = (id) => {
        dispatch({ type: "INCREASE", payload: id })
    }
    const decreaseItem = (id) => {
        dispatch({ type: "DECREASE", payload: id })
    }

    return (
        <AppContext.Provider
            value={{
                ...state, clearCart, removeItem, increaseItem, decreaseItem
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }