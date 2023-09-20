"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = (b**2) - (4 * a * c);
  let root = Math.sqrt(discr);
  if (discr > 0) {
    let firstResult = (-b + root) / (2 * a);
    let secondResult = (-b - root) / (2 * a);
    arr.push(firstResult, secondResult);
  } else if (discr === 0) {
    arr.push(-b / (2 * a));
  } 
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let percentNew = (percent / 100) / 12;
    let body = amount - contribution;
    let monthPay = body * (percentNew + (percentNew / (((1 + percentNew) ** countMonths) - 1)));
    let allAmount = monthPay * countMonths;
    let allAmountRound = allAmount.toFixed(2);
    let result = parseFloat(allAmountRound);
    return result;
}