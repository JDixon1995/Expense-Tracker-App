import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = ( {balance} ) => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className='balance-div'>
            <h4>Your Balance</h4>
            <h1 className='balance'>${total}</h1>
        </div>
    )
}

export default Balance