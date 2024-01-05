// Write your code here
import './index.css'

function MoneyDetails(props) {
  const {totalIncome, totalExpenses} = props
  console.log(totalIncome, totalExpenses)
  return (
    <ul className="money-details-container">
      <li className="money-detail">
        <img
          className="img"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="money">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {totalIncome - totalExpenses}
          </p>
        </div>
      </li>
      <li className="money-detail income">
        <img
          className="img"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p className="money">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li className="money-detail expenses">
        <img
          className="img"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p className="money">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
