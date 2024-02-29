// function Reverse (1)
function reverse (str){
  var newStr=""
  for(var i=str.length-1;i>=0;i--){
    newStr+=str[i]
  }
  return  newStr
}
console.log(reverse ("hello world"))



  
// function counter (2)
function counter(str){ 
  let count=0
  for (let i=0; i<str.length;i++){
    count++
  }
return count;
}
console.log(counter("hello"));





// function Capitalize Words (3)
function CapitalizeWord(str){
  let mystr = str.split(' ');
  for(let i = 0; i< mystr.length;i++){
    mystr[i] = mystr[i][0].toUpperCase() + mystr[i].substr(1);
  }
  return mystr.join(' ');
}
console.log(CapitalizeWord("hello world"));






//function MAX (4)
function findMax(arr) {
  if (arr.length === 0) {
    return undefined; 
  }
  let max = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
  }
}
  return max;
}
//function MIN (4)
function findMin(arr) {
  if (arr.length === 0) {
    return undefined; 
  }
  let min = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; 
    }
  }
  return min;
}
const numbers = [5, 2, 9, 55, 1, 7, 0 ,-10];
const maximumValue = findMax(numbers);
const minimumValue = findMin(numbers);

console.log("Maximum Value:", maximumValue); 
console.log("Minimum Value:", minimumValue); 





// function sum of array (5)
function sumArray(arr) {
  
  if (arr.length === 0) {
      return 0; 
  }
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}

const myArray = [1, 2, 20, 5];
const result = sumArray(myArray);
console.log(result);




// function filter (6)
function filterArray(arr, condition) {
  
  const filteredArray = arr.filter(element => condition(element));
  return filteredArray;
}
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = number => number % 2 === 0;

const evenNumbers = filterArray(Numbers, isEven);
console.log(evenNumbers); 





// function factorial (7)
function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}
const num = 5;
const Result = factorial(num);
console.log(`The factorial of ${num} is: ${Result}`);








// function Prime Number Check (8)
function isPrime(number) {
  if (number <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          return false;
      }
  }
  return true;
}
const numToCheck = 1;
if (isPrime(numToCheck)) {
  console.log(`${numToCheck} is a prime number.`);
} else {
  console.log(`${numToCheck} is not a prime number.`);
}






// function Fibonacci Sequence (9)
function generateFibonacci(n) {
  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }
  return fibonacciSequence;
}
const numberOfTerms = 10;
const fibonacciResult = generateFibonacci(numberOfTerms);
console.log(fibonacciResult);
