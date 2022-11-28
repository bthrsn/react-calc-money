import React from "react";
// Реализовать функционал
// написать функции которые считают расходы, доходы и остаток средств
// Пишем эти функции в App.js
// можно перебирать массив transaction с помощью reduce и выводить его

const Total = ({ resultExpenses, resultIncome, totalBalance }) => {
  return (
    <section className="total">
      <header className="total__header">
        <h3> Balance </h3> <p className="total__balance"> {totalBalance} €</p>{" "}
      </header>{" "}
      <div className="total__main">
        <div className="total__main-item total__income">
          <h4> Incomes </h4>{" "}
          <p className="total__money total__money-income"> {resultIncome} €</p>{" "}
        </div>{" "}
        <div className="total__main-item total__expenses">
          <h4> Expenses </h4>{" "}
          <p className="total__money total__money-expenses"> {resultExpenses} €</p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Total;
