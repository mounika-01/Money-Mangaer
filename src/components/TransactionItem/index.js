import React from 'react'
import './index.css'

const TransactionItem = ({transaction, onDelete}) => {
  const handleDelete = () => {
    onDelete(transaction.id)
  }

  return (
    <li className="transaction-item">
      <p>Title: {transaction.title}</p>
      <p>Amount: ${transaction.amount.toFixed(2)}</p>
      <p>Type: {transaction.type}</p>
      <img
        src="https://example.com/delete-image.jpg" // Update with your delete image URL
        alt="delete"
        className="delete-icon"
        onClick={handleDelete}
      />
    </li>
  )
}

export default TransactionItem
