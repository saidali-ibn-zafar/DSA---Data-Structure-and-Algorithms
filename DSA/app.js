// Write a program to reverse an array or string
// Given an array (or string), the task is to reverse the array/string.
// Examples :
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

// input should be arr/string!
const reversed = (input) => {
  if (Array.isArray(input)) {
    return input.reverse();
  } else if (typeof input === "string") {
    return input.split("").reverse().join("");
  } else {
    throw new Error(
      "Invalid input type. Only arrays and strings are supported."
    );
  }
};

// console.log(reversed(1234)); // Error, btw I liked throw new Error(...);
console.log(reversed([1, 2, 3, 4]));
console.log(reversed("Uzbekistan"));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Maximum and minimum of an array using minimum number of comparisons
// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
// Examples:

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//               Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//               Maximum element is: 35

const findMinAndMax = (arr) => {
  if (Array.isArray(arr)) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `From [${arr}]\n
Min = ${min}\n
Max = ${max}`;
  } else {
    throw new Error("Invalid input type. Only arrays are supported.");
  }
  return 0;
};

console.log(findMinAndMax([5, 4, 6, 2, 3, 6, 5, 1]));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

const findKthSmallest = (arr, k) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input type. Only arrays are supported.");
  }
  if (k <= 0 || k > arr.length) {
    throw new Error("Invalid value of k.");
  }

  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[k - 1];
};

const myArr = [1, 2, 33, 44, 55, 5];
const k = 3;
const kthSmallest = findKthSmallest(myArr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Sort an array of 0s, 1s and 2s
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Example 1:

// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated
// into ascending order.

const sortAscending = (arr) => {
  return [...arr].sort((a, b) => a - b);
};

console.log(sortAscending([0, 1, 0, 2, 0, 0, 2])); // Output: [0, 0, 0, 0, 1, 2, 2]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Move all negative numbers to beginning and positive to end with constant extra space
// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.
// Examples :

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

const sortNegativeAndPositive = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input type. Only arrays are supported.");
  }

  const result = [...arr].sort((a, b) => {
    if (a < 0 && b >= 0) {
      return -1;
    } else if (a >= 0 && b < 0) {
      return 1;
    }

    return a - b;
  });

  return result;
};

const arr = [5, -2, 10, -8, 0, -1, 3];
console.log(sortNegativeAndPositive(arr));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Union of two arrays
// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.
// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Note : Elements are not necessarily distinct.
// Example 1:

// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output:
// 5
// Explanation:
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.

const unionOfArr = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Invalid input type. Only arrays are supported.");
  }

  let result = arr1.concat(arr2);
  result = result.filter((el, index) => {
    return result.indexOf(el) === index;
  });

  return result.length;
};

console.log(unionOfArr([1, 2, 2, 2, 3, 4], [1, 2, 3, 12]));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Cyclically rotate an array by one
// Given an array, rotate the array by one position in clock-wise direction.

// Example 1:

// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4

const cyclicallyRotate = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input type. Only arrays are supported.");
  }

  const lastEl = arr.pop();
  arr.unshift(lastEl);
  return arr;
};

console.log(cyclicallyRotate([1, 2, 3, 4, 5]));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =



// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
