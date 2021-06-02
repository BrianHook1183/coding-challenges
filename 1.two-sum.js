/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function (nums, target) {
  // *brute force!!  38 mb / 74ms
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === remainder) {
        return [i, j];
      }
    }
  }
};

// @lc code=end
