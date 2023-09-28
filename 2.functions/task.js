const getArrayParams = function (...args) {
  let maxNumber = Math.max(...args);
  let minNumber = Math.min(...args);
  let sumNotRound = (function sum() {
   let total =  Array.prototype.slice.call(arguments).reduce(function(a, b) { 
   return a + b; 
   }, 0);
   return total;
}) (...args) / args.length;
  let sumRound = sumNotRound.toFixed(2);
  let avgNumber = parseFloat(sumRound);
  let result = {
    min: minNumber,
    max: maxNumber, 
    avg: avgNumber
  }
  return result;
}

function summElementsWorker(...arr) {
  let result = (function sum() {
    let total = Array.prototype.slice.call(arguments).reduce(function(a, b) { 
    return a + b; 
    }, 0);
    return total;
 }) (...arr);
  return result;
}

function differenceMaxMinWorker(...arr) {
  let result =  Math.max(...arr) - Math.min(...arr);
  if (result === -Infinity) {
    return 0;
  } else {
    return result;
  }
}

function differenceEvenOddWorker(...arr) {
 let sumEvenElement = 0;
 let sumOddElement = 0;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 === 0) {
       sumEvenElement = sumEvenElement + arr[i];
     } else {
       sumOddElement = sumOddElement + arr[i];
     } 
   }
   return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
      }
    result = sumEvenElement / countEvenElement;
    }
   if (isNaN(result) === true) {
    return 0;
  } else {
    return result;
  }
}

function makeWork (arrOfArr, func) {
  let finishedArray = [];
  for (let i = 0; i < arrOfArr.length; i++) {
   finishedArray.push(func(...arrOfArr[i]));
}
  return Math.max(...finishedArray);
}
