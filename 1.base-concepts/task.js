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

  if (!isNaN(parseInt(percent)) && parseInt(percent) >= 0) {
    percent = Number(percent);
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  console.log(typeof percent);

  if (!isNaN(parseInt(contribution)) && parseInt(contribution) >= 0) {
    contribution = Number(contribution);
  } else {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  console.log(typeof contribution);

  if (!isNaN(parseInt(amount)) && parseInt(amount) >= 0) {
    amount = Number(amount);
  } else {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  console.log(typeof amount);

  //Future Time
  let futureTime = new Date(date);
  let futureMonth = new Date().getMonth(date);

  let percentage = percent / 100 / 12;
  console.log(typeof percentage);

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

  totalAmount = parseFloat(fullPayment);

  console.log(typeof fullPayment);
  console.log(typeof totalAmount);
  console.log(totalAmount);

  // код для задачи №2 писать здесь

  return totalAmount;
}

calculateTotalMortgage();
