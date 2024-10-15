import React from 'react'
import './index.css'

const MoneyDetails = ({balanceAmount, incomeAmount, expensesAmount}) => {
  const formatCurrency = amount => `$${amount.toFixed(2)}`

  return (
    <div className="money-details">
      <div className="money-detail">
        <img
          src="https://example.com/balance-image.jpg"
          alt="balance"
          className="balance-image"
        />
        <p>Your Balance</p>
        <p data-testid="balanceAmount">{formatCurrency(balanceAmount)}</p>
      </div>

      <div className="money-detail">
        <img
          src="https://example.com/income-image.jpg"
          alt="income"
          className="income-image"
        />
        <p>Your Income</p>
        <p data-testid="incomeAmount">{formatCurrency(incomeAmount)}</p>
      </div>

      <div className="money-detail">
        <img
          src="https://example.com/expenses-image.jpg"
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
