const twoSum = (nums, target) => {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices[complement] !== undefined) {
      return [numIndices[complement], i];
    }

    numIndices[nums[i]] = i;
  }

  throw new Error("No solution found!");
};

// Example usage:

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
