import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)


    return (
        <>
          <h3>Transaction History</h3>
          <ul className="list">
            {transactions.map(transaction => (
              <Transaction
               transaction={transaction}
               key={transaction.id} />
            ))}
            </ul>  
        </>
    )
}

export default TransactionList
