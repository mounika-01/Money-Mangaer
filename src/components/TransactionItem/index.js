// src/components/TransactionItem/index.js
import React from 'react'
import './index.css'

const TransactionItem = ({transaction, onDelete}) => {
  const {id, title, amount, type} = transaction

  return (
    <li key={id} className="transaction-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  )
}

export default TransactionItem
