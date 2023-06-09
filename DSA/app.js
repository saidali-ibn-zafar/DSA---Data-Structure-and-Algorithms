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
