// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// my logic= in for loop take a number ,
//  balance=target -number,
//  if(nums.includes(balance)),
//  i will return the index of the balance number

function twoSum(nums, target) {
 
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let balance = target - nums[i];
    if (balance === nums[i]) {
      if (obj[balance] > 1) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] === balance) {
            return [i, j];
          }
        }
      }
    } else if (obj[balance]) {
      let answerIndex = nums.indexOf(balance);
      return [i, answerIndex];
    }
  }
  return false;
}
console.log(twoSum([3, 3], 6));
