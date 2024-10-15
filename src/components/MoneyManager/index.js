import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const MoneyManager = () => {
  const [titleInput, setTitleInput] = useState('')
  const [amountInput, setAmountInput] = useState('')
  const [transactionType, setTransactionType] = useState('INCOME')
  const [transactions, setTransactions] = useState([])

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'INCOME')
    .reduce((acc, curr) => acc + curr.amount, 0)

  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'EXPENSE')
    .reduce((acc, curr) => acc + curr.amount, 0)

  const totalBalance = totalIncome - totalExpenses

  const addTransaction = event => {
    event.preventDefault()
    const amount = parseFloat(amountInput)
    if (titleInput && amountInput && amount > 0) {
      const newTransaction = {
        id: uuidv4(), // Use uuid for unique ID
        title: titleInput,
        amount: amount,
        type: transactionType,
      }
      setTransactions(prev => [...prev, newTransaction])
      setTitleInput('') // Clear title input
      setAmountInput('') // Clear amount input
      setTransactionType('INCOME') // Reset transaction type
    }
  }

  const deleteTransaction = id => {
    const filteredTransactions = transactions.filter(
      transaction => transaction.id !== id,
    )
    setTransactions(filteredTransactions)
  }

  return (
    <div className="money-manager">
      <h1>Welcome back to your Money Manager</h1>

      <MoneyDetails
        balanceAmount={totalBalance}
        incomeAmount={totalIncome}
        expensesAmount={totalExpenses}
      />

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
          id="amountInput"
          type="text"
          value={amountInput}
          onChange={e => setAmountInput(e.target.value)}
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

      {/* Render the transaction history */}
      <h2>History</h2>
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
