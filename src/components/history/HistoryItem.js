import React from "react";

const HistoryItem = ({ transaction, delTransaction }) => (
  <li
  className={`history__item ${transaction.add  ?
  'history__item-plus' :
  'history__item-minus'}`}>
    {transaction.description}
    <span className="history__money">{transaction.amount}€ </span>{" "}
    <button className="history__delete" onClick={() => delTransaction(transaction.id)}> x </button>
  </li>
);

export default HistoryItem;
