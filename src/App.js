import React, {
  Component
} from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

class App extends Component {
        // Для хранения данных создаем состояние
state = {
    transactions: [],
    description: "",
    amount: "",
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
      amount: this.state.amount,
      add
      }
          // и пушим изменения
          transactions.push(transaction);
// Обновляем свойство transactions
this.setState({ 
  transactions,
  // очищаем поля ввода, передавая пустые строки
description: '',
amount: ''
});
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
            <Total />
            <History transactions={this.state.transactions}/>
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