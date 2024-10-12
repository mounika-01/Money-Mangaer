// src/components/MoneyManager/index.js
import React, {useState} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const MoneyManager = () => {
  const [titleInput, setTitleInput] = useState('')
  const [amountInput, setAmountInput] = useState('')
  const [transactionType, setTransactionType] = useState('INCOME')
  const [transactions, setTransactions] = useState([])

  // Calculate total income, expenses, and balance
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'INCOME')
    .reduce((acc, curr) => acc + curr.amount, 0)

  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'EXPENSE')
    .reduce((acc, curr) => acc + curr.amount, 0)

  const totalBalance = totalIncome - totalExpenses

  // Add transaction function with correct parsing of the amount
  const addTransaction = event => {
    event.preventDefault()
    const amount = parseFloat(amountInput)
    if (titleInput && amountInput && amount > 0) {
      const newTransaction = {
        id: Date.now(),
        title: titleInput,
        amount: amount,
        type: transactionType,
      }
      setTransactions(prev => [...prev, newTransaction])
      setTitleInput('')
      setAmountInput('')
    }
  }

  // Delete transaction function
  const deleteTransaction = id => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id))
  }

  return (
    <div className="money-manager">
      {/* Welcome message */}
      <h1>Welcome back to your Money Manager</h1>

      {/* Use MoneyDetails component for balance, income, and expenses */}
      <MoneyDetails
        balanceAmount={totalBalance}
        incomeAmount={totalIncome}
        expensesAmount={totalExpenses}
      />

      {/* Form to add transactions */}
      <form onSubmit={addTransaction}>
        <label htmlFor="titleInput">Title</label>
        <input
          id="titleInput"
          type="text"
          value={titleInput}
          placeholder="Title"
          onChange={e => setTitleInput(e.target.value)}
        />
        <label htmlFor="amountInput">Amount</label>
        <input
  type="text" // This sets the input type to text
  id="amountInput"
  value={amountInput} // You should have a state for this
  onChange={this.handleAmountChange} // Make sure to handle changes in this input
  placeholder="Enter amount"
/>

        <select
          onChange={e => setTransactionType(e.target.value)}
          value={transactionType}
        >
          <option value="INCOME">Income</option>
          <option value="EXPENSE">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>

      {/* Transaction list */}
      <ul>
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <TransactionItem
              key={transaction.id} // Ensure unique key
              transaction={transaction}
              onDelete={deleteTransaction}
            />
          ))
        ) : (
          <p>No transactions available</p>
        )}
      </ul>
    </div>
  )
}

export default MoneyManager
