const evenlyDivide = (num) => {
  const madeArr = Array.from(String(num));

  let counterRes = 0;
  for (let i = 0; i < madeArr.length; i++) {
    if (num % madeArr[i] === 0) {
      counterRes++;
    }
  }
  return counterRes;
};

console.log(evenlyDivide(36));

// = = = = =

// Reverse a number
const reverseNnumber = (num) => {
  const res = num.toString().split("").reverse().join("");
  return Number(res);
};

console.log(reverseNnumber(123));

// = = = = =

// Check if a number is Palindrome or Not
const isPalindromeNum = (num) => {
  const res = num.toString().split("").reverse().join("");
  return Number(res) === num;
};

console.log(isPalindromeNum(123));

// = = = = =

// Check if a number is Armstrong Number or not
const isArmstrongNumber = (num) => {
  const arr = Array.from(num.toString(), Number);
  var len = arr.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Math.pow(arr[i], len);
  }

  return sum === num;
};

console.log(isArmstrongNumber(153));


// Print all Divisors of a given Number
const printAllDivisors = (num) => {
  if (num <= 1 || num <= Math.pow(10, 3)) {
    throw new Error("Wrong input!");
  }
  let res = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }
  return res;
};

// console.log(printAllDivisors(-10));

// = = = = =
// Check if a number is prime or not
const isPrime = (num) => {
  if (num < 2) {
    throw new Error(
      "2 is the smallest prime number, so your input cannot be prime number!"
    );
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(2));

// = = = = =

// = = = = =

// = = = = =

// = = = = =

// = = = = =

// = = = = =

// = = = = =

