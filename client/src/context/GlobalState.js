import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//Initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}