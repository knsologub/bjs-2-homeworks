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

  //Провнрка введённыз значений на число
  function checkIsNan() {
    if (isNaN(percent) === true) {
      return alert(
        `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
      );
    } else return (percentage = percent / 100 / 12);
  }
  checkIsNan(percent);

  console.log(typeof percentage);

  //Current Time
  let currentTime = new Date();
  console.log(currentTime);

  //Future Time
  let futureTime = new Date(date);
  console.log(futureTime);

  let time = futureTime - currentTime;
  console.log(time);

  //Time calculation
  let elapsed = futureTime.getTime() - currentTime.getTime();
  let loanTermDays = elapsed / 8.64e7;

  let loanTermMonth = loanTermDays / 30;
  //console.log(loanTermMonth);

  let loanTerm = Math.floor(loanTermMonth);
  console.log(loanTerm);

  //console.log(loanTerm);

  //Loan calculation
  let loan = amount - contribution; //тело кредита

  let monthPayment =
    loan * (percentage + percentage / ((1 + percentage) ** loanTerm - 1)); //ежемесячный платёж

  let fullPayment = monthPayment * loanTermMonth; //Общая сумма выплаты

  totalAmount = fullPayment.toFixed(2);

  // код для задачи №2 писать здесь

  return parseFloat(totalAmount);
}

calculateTotalMortgage();
