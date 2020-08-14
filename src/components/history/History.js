import React from "react";

const History = () => {
  return (
    <section class="history">
      <h3>История расходов</h3>
      <ul class="history__list">
        <li class="history__item history__item-plus">
          Получил зарплату
          <span class="history__money">+30000 ₽</span>
          <button class="history__delete">x</button>
        </li>

        <li class="history__item  history__item-minus">
          Отдал долг
          <span class="history__money">-10000 ₽</span>
          <button class="history__delete">x</button>
        </li>
      </ul>
    </section>
  );
};

export default History;
