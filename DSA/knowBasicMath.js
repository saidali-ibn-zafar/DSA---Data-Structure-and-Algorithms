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

// = = = = =

// = = = = =

// = = = = =

// = = = = =

// = = = = =

// = = = = =

