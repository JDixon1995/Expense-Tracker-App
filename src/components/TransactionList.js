import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

    return (
        <>
          <h3>Transaction History</h3>
          <ul className="list">
            {transactions.map(transaction => (
              <li>{transaction.text}<span>{transaction.amount}</span><button className="delete-btn">x</button></li>
            ))}
            </ul>  
        </>
    )
}

export default TransactionList
