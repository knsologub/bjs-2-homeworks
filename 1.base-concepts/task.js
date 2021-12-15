"use strict";

function solveEquation(a, b, c) {
  let arr;

  const D = b ** 2 - 4 * a * c;
  if (D === 0) {
    return [-b / (2 * a)];
  } else if (D > 0) {
    return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    // код для задачи №1 писать здесь
  }
  return []; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let percentage;

  //Проверка введённых значений на число
  function checkIsNan() {
    if (isNaN(percent) === true) {
      return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else return (percentage = percent / 100 / 12);

    if (isNaN(contribution) === true) {
      return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    } else return;

    if (isNaN(amount) === true) {
      return `Параметр "Общая сумма" содержит неправильное значение ${amount}`;
    } else return;
  }

  checkIsNan(percent, contribution, amount);

  //Future Time
  let futureTime = new Date(date);
  let futureMonth = new Date().getMonth(date);

  //Current Time

  let currentTime = new Date();
  //console.log(currentTime);

  let currentMonth = new Date().getMonth();

  let currentYear = new Date().getFullYear();

  //Time difference

  let diffYears = futureTime.getFullYear() - currentYear;
  //console.log(diffYears);

  let diffMonth = diffYears * 12 - (currentMonth + 1) + (futureMonth + 1);
  //console.log(diffMonth);

  //Loan calculation
  let loan = amount - contribution; //тело кредита

  let monthPayment =
    loan * (percentage + percentage / ((1 + percentage) ** diffMonth - 1)); //ежемесячный платёж

  let fullPayment = (monthPayment * diffMonth).toFixed(2); //Общая сумма выплаты

  totalAmount = Number(fullPayment);
  console.log(totalAmount);

  // код для задачи №2 писать здесь

  return totalAmount;
}

calculateTotalMortgage();
