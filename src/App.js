import React, {
  Component
} from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

class App extends Component {
state = {
    transactions: JSON.parse(localStorage.getItem('calc-money')) || [],
    description: "",
    amount: "",
    resultExpenses: 0,
    resultIncome: 0,
    totalBalance: 0,
  }

componentWillMount() {
  this.getTotalBalance();
}
componentDidUpdate() {
this.addStorage();
}

  addTransaction = (add) => {
    const transactions = [...this.state.transactions];

    const transaction = {
      id: `cmr${(+new Date()).toString(16)}`,
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      add
      }
          transactions.push(transaction);
this.setState({
  transactions,
  description: '',
  amount: '',
}, this.getTotalBalance);
  }

  addAmount = (e) => {
    this.setState({
      amount: e.target.value
    });

  }

  addDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  getIncome = () => this.state.transactions
    .filter(item => item.add)
    .reduce((acc, item) => item.amount + acc, 0)

getExpenses = () => this.state.transactions
  .filter(item => !item.add)
  .reduce((acc, item) => item.amount + acc, 0)

  getTotalBalance() {
    const resultIncome = this.getIncome();
    const resultExpenses = this.getExpenses();

    const totalBalance = resultIncome - resultExpenses;

    this.setState({
      resultExpenses,
      resultIncome,
      totalBalance,
    });
  }

addStorage() {
localStorage.setItem('calc-money', JSON.stringify(this.state.transactions))
}

delTransaction = (id) => {
  const transactions = this.state.transactions.filter(item => item.id !== id);
this.setState({ transactions }, this.getTotalBalance);
}

  render() {
    return (
      <>
        <header>
          <h1> Wallet </h1>
          <h2> Budget Calculator </h2>
        </header>
        <main>
          <div className="container">
            <Total
            resultExpenses={this.state.resultExpenses}
            resultIncome={this.state.resultIncome}
            totalBalance={this.state.totalBalance}/>
            <History
            transactions={this.state.transactions}
            delTransaction={this.delTransaction}/>
            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              description={this.state.description}
              amount={this.state.amount}
            />
          </div>
        </main>
      </>
    );
  }
}
export default App;