import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./normalize.css";
import "./style.css";

// компоненты пишуться с большой буквы
// создадим кнопку с помощью реакта, свойств(pops) не будет
// const Test = () => React.createElement("button", null, "Привет!");

// кнопка на чистом jsx, обычно создается вот так, потому что весит меньше
// const Test2 = () => <button>Привет!</button>;

// Создадим функциональный компонент
// По id в нативном js мы его найти не сможем
// const Header = ({ text }) => <h1 id="h1">{text}</h1>;

// создаем Элемент
// const Element = <p>Параграф</p>;

// создаем классовый компонент
// class Main extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <Header text={"свойство текст" + this.props.count} />
//         {Element}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
