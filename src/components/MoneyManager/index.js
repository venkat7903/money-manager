import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    historyList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    let value
    if (event.target.value === '') {
      value = 0
    } else {
      value = parseInt(event.target.value)
    }
    this.setState({
      amount: value,
    })
  }

  onChangeType = event => {
    this.setState({
      type: event.target.value === 'INCOME' ? 'Income' : 'Expenses',
    })
  }

  getTotalIncome = () => {
    const {historyList} = this.state
    const incomeList = historyList.map(each => {
      if (each.type === 'Income') {
        return each.amount
      }
      return 0
    })
    let sum = 0
    incomeList.forEach(each => {
      let value
      if (each === '') {
        value = 0
      } else {
        value = parseInt(each)
      }
      sum += value
    })
    return sum
  }

  getTotalExpenses = () => {
    const {historyList} = this.state
    const incomeList = historyList.map(each => {
      if (each.type === 'Expenses') {
        return each.amount
      }
      return 0
    })
    let sum = 0
    incomeList.forEach(each => {
      let value
      if (each === '') {
        value = 0
      } else {
        value = parseInt(each)
      }
      sum += value
    })
    return sum
  }

  onAddBtn = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  onDeleteTransaction = id => {
    const {historyList} = this.state
    const filteredTransactions = historyList.filter(each => each.id !== id)
    this.setState({
      historyList: filteredTransactions,
    })
  }

  render() {
    const {historyList, title, amount} = this.state

    return (
      <div className="money-manager-app-container">
        <div className="sub-money-manager-app-container">
          <div className="user-container">
            <h1 className="greeting-title">Hi, Richard</h1>
            <p className="greeting-desc">
              Welcome back to your
              <span className="highlight"> Money Manager</span>
            </p>
          </div>
          <div className="main-money-details-container">
            <MoneyDetails
              totalIncome={this.getTotalIncome()}
              totalExpenses={this.getTotalExpenses()}
            />
          </div>
          <div className="form-history-container">
            <div className="form-container">
              <h1 className="form-title">Add Transaction</h1>
              <form className="inputs-container" onSubmit={this.onAddBtn}>
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  placeholder="TITLE"
                  id="title"
                  value={title}
                  onChange={this.onChangeTitle}
                />
                <br />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  type="text"
                  id="amount"
                  placeholder="AMOUNT"
                  value={amount}
                  onChange={this.onChangeAmount}
                />
                <br />
                <label htmlFor="select">TYPE</label>
                <select
                  id="select"
                  className="select"
                  onChange={this.onChangeType}
                >
                  <option
                    value={transactionTypeOptions[0].optionId}
                    key={transactionTypeOptions[0].optionId}
                    selected
                  >
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option
                    value={transactionTypeOptions[1].optionId}
                    key={transactionTypeOptions[1].optionId}
                  >
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="history-title">History</h1>
              <div className="history-titles">
                <div className="transaction-history-titles">
                  <p className="history-name title">Title</p>
                  <p className="history-name">Amount</p>
                  <p className="history-name">Type</p>
                </div>
              </div>
              <ul className="history-list">
                {historyList.map(each => (
                  <TransactionItem
                    key={each.id}
                    transactionDetails={each}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
