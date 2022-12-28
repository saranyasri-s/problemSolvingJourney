// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

// my logic
// 3 for loops used;
// first to get the first maximum Number and its index
// set it to be -Infinity;

// second loop is to get the second maximum number and its index
// set it to be -Infinity;
// if secondmax is not present , return firstmax;

// third loop is to get the third maximum number and return it if present or return the first maximum

var thirdMax = function (nums) {
  let firstMax;
  let secondMax;
  let thirdMax;

  let secondmaxPresent = false;
  let thirdmaxPresent = false;

  let max = -Infinity;
  let firstMaxIndex;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      firstMaxIndex = i;
    }
  }
  firstMax = max;
  nums[firstMaxIndex] = -Infinity;

  max = -Infinity;
  let secondMaxIndex;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max && nums[i] !== firstMax) {
      secondmaxPresent = true;
      max = nums[i];
      secondMaxIndex = i;
    }
  }
  if (secondmaxPresent) {
    secondMax = max;
    nums[secondMaxIndex] = -Infinity;
  } else {
    return firstMax;
  }

  max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max && nums[i] !== firstMax && nums[i] !== secondMax) {
      thirdmaxPresent = true;
      max = nums[i];
    }
  }

  if (thirdmaxPresent) {
    thirdMax = max;
    return thirdMax;
  } else {
    return firstMax;
  }
};
console.log(thirdMax([2, 2, 3, 1]));
