function sum(numOne, numTwo){
  var sum = numOne + numTwo;
  // console.log('"The sum of ' + numOne + ' and ' + numTwo + ' is ' + sum + '."');
  return sum;
}

function multiply(numOne, numTwo){
  var multiply = numOne * numTwo;
  return multiply;
  // console.log('"The product of ' + numOne + ' and ' + numTwo + ' is ' + multiply + '."');
}

function sumAndMultiply(numOne, numTwo, numThree){
  var sumTwo = sum(sum(numOne, numTwo), numThree);
  var multTwo = multiply(multiply(numOne, numTwo), numThree);
  var numArray = [sumTwo, multTwo];
  console.log('"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sums to ' + numArray[0] + '."');
  console.log('"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + numArray[1] + '."');
}

function sumArray(arr){
  var sumThree = arr[0] + arr[1] + arr[2];
  console.table(arr);
  console.log('"' + arr[0] + ',' + arr[1] + ',' + arr[2] + ' was passed in as an array of numbers, and ' + sumThree + ' is their sum."');
}

function multiplyArray(arrr){
  var mult = arrr[0] * arrr[1] * arrr[2];
  console.table(arrr);
  console.log('"The numbers ' + arrr[0] + ',' + arrr[1] + ',' + arrr[2] + ' have a product of ' + mult + '."');
}
