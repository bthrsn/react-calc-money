import React from "react";

const Operation = () => {
  return (
    <section className="operation">
      <h3>Новая операция</h3>
      <form id="form">
        <label>
          <input
            type="text"
            className="operation__fields operation__name"
            placeholder="Наименование операции"
          />
        </label>
        <label>
          <input
            type="number"
            className="operation__fields operation__amount"
            placeholder="Введите сумму"
          />
        </label>
        <div className="operation__btns">
          <button
            type="submit"
            className="operation__btn operation__btn-subtract"
          >
            РАСХОД
          </button>
          <button type="submit" className="operation__btn operation__btn-add">
            ДОХОД
          </button>
        </div>
      </form>
    </section>
  );
};
export default Operation;
