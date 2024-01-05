// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {title, amount, type, id} = transactionDetails
  const onClickDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="transaction-titles">
      <div className="transaction-details-container">
        <p className="transaction tranc-title">{title}</p>
        <p className="transaction amount">{amount}</p>
        <p className="transaction expense">{type}</p>
      </div>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
