function sum(numOne, numTwo){
  var sum = numOne + numTwo;
  var sumFunction = document.getElementById('sumFunction');
  sumFunction.textContent = '"The sum of ' + numOne + ' and ' + numTwo + ' is ' + sum + '."';
  return sum;
}
//Nice Code!!!
function multiply(numOne, numTwo){
  var multiply = numOne * numTwo;
  var multFunction = document.getElementById('multFunction');
  multFunction.textContent = '"The sum of ' + numOne + ' and ' + numTwo + ' is ' + multiply + '."';
  return multiply;
}
//Wow amazeballs!!!
function sumAndMultiply(numOne, numTwo, numThree){
  var sumTwo = sum(sum(numOne, numTwo), numThree);
  var multTwo = multiply(multiply(numOne, numTwo), numThree);
  var numArray = [sumTwo, multTwo];
  var samFunction = document.getElementById('samFunction');
  var samTwoFunction = document.getElementById('samTwoFunction');
  samFunction.textContent = '"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sums to ' + numArray[0] + '."';
  samTwoFunction.textContent = '"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + numArray[1] + '."';
}

function sumArray(arr){
  var sumThree = arr[0] + arr[1] + arr[2];
  var sumArrayFunction = document.getElementById('sumArrayFunction');
  console.log(arr);
  sumArrayFunction.textContent = '"' + arr[0] + ',' + arr[1] + ',' + arr[2] + ' was passed in as an array of numbers, and ' + sumThree + ' is their sum."';
}

function multiplyArray(arrr){
  var mult = arrr[0] * arrr[1] * arrr[2];
  var multArrayFunction = document.getElementById('multArrayFunction');
  console.log(arrr);
  multArrayFunction.textContent = '"The numbers ' + arrr[0] + ',' + arrr[1] + ',' + arrr[2] + ' have a product of ' + mult + '."';
}

function multiplyArray(arrr){
  var mult = arrr[0] * arrr[1] * arrr[2];
  console.table(arrr);
  console.log('"The numbers ' + arrr[0] + ',' + arrr[1] + ',' + arrr[2] + ' have a product of ' + mult + '."');
}
