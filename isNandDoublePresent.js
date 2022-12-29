// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

// example 3
// input:[0,1,3,4]
// output false

// example 4
// input :[0,0]
// output: true

// Constraints:

// 2 <= arr.length <= 500
// -103 <= arr[i] <= 103

function checkIfExist(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (obj[0] > 1) {
        return true;
      }
    } else {
      let double = 2 * arr[i];
      let divideBy2 = arr[i] / 2;
      if (obj[double] || obj[divideBy2]) {
        return true;
      }
    }
  }

  return false;
}
console.log(checkIfExist([0, 0, 1, 3]));
console.log(checkIfExist([0, 1, 3]));
console.log(checkIfExist([0, 1, 2, 3]));
