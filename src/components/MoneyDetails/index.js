// src/components/MoneyDetails/index.js
import React from 'react'
import './index.css'

const MoneyDetails = ({balanceAmount, incomeAmount, expensesAmount}) => {
  const formatCurrency = amount => `$${amount.toFixed(2)}` // Ensure currency format

  return (
    <div className="money-details">
      {/* Balance Section */}
      <div className="money-detail">
        <img src="balance-image-url" alt="balance" className="balance-image" />
        <p>Your Balance</p>
        <p data-testid="balanceAmount">{formatCurrency(balanceAmount)}</p>
      </div>

      {/* Income Section */}
      <div className="money-detail">
        <img src="income-image-url" alt="income" className="income-image" />
        <p>Your Income</p>
        <p data-testid="incomeAmount">{formatCurrency(incomeAmount)}</p>
      </div>

      {/* Expenses Section */}
      <div className="money-detail">
        <img
          src="expenses-image-url"
          alt="expenses"
          className="expenses-image"
        />
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">{formatCurrency(expensesAmount)}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
