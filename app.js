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
