import React, {
  Component
} from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

class App extends Component {
        // Для хранения данных создаем состояние
state = {
    transactions: JSON.parse(localStorage.getItem('calc-money')) || [],
    description: "",
    amount: "",
    resultExpenses: 0,
    resultIncome: 0,
    totalBalance: 0,
  }

  // Чтобы из localstorage инфа поступала в total
componentWillMount() {
  this.getTotalBalance();
}
// удаляем из localstorage
componentDidUpdate() {
this.addStorage();
}

    // метод добавляющий транзакцию
  addTransaction = (add) => {
    // Создаем копию состояния, чтобы пушить изменения в transactions
    const transactions = [...this.state.transactions];

    // Объект для хранения изменеий
    const transaction = {
      // Генерация ID, можно подключить библиотеку, а можно использовать текущую дату
      id: `cmr${(+new Date()).toString(16)}`,
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      add
      }
          // и пушим изменения
          transactions.push(transaction);
// Обновляем свойство transactions
this.setState({ 
  transactions,
  // очищаем поля ввода, передавая пустые строки
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

  // Получаем доход
  getIncome = () => this.state.transactions
    // Сначала фильтруем только доходы
    .filter(item => item.add)
    // Потом складываем их и указываем, что первое значение = 0
    // Нужно два параметра в acc копиться, а item это новый доход
    .reduce((acc, item) => item.amount + acc, 0)

  // Получаем расходы
getExpenses = () => this.state.transactions
  // В расходах инвенртируем item, нужны расходы, а не доходы
  .filter(item => !item.add)
  .reduce((acc, item) => item.amount + acc, 0)

// Считаем итог
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

  // метод для хранения в localstorage
addStorage() {
localStorage.setItem('calc-money', JSON.stringify(this.state.transactions))
}

// Удаление элемента
delTransaction = (id) => {
  const transactions = this.state.transactions.filter(item => item.id !== id);
this.setState({ transactions }, this.getTotalBalance);
}

  render() {
    return (
      // React.Fragment можно не писать, отсюда пустой тег
      <>
        <header>
          <h1> Кошелек </h1> 
          <h2> Калькулятор расходов </h2>
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