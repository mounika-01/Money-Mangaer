import React from 'react'
import './index.css'

const TransactionItem = ({transactionDetails, deleteTransaction}) => {
  const {id, title, amount, type} = transactionDetails

  return (
    <li className="table-row">
      <p className="table-cell">{title}</p>
      <p className="table-cell">Rs {amount}</p>
      <p className="table-cell">{type}</p>
      <img
        data-testid="delete"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        onClick={() => deleteTransaction(id)}
        onError={e => {
          e.target.onerror = null // prevents looping
          e.target.src = 'fallback_image_url' // provide a fallback image URL
        }}
        className="delete-image"
      />
    </li>
  )
}

export default TransactionItem
