/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let ans = [];
  for(let i = 0; i < nums.length; i += 2){
    for( let j = 0; j < nums[i]; j++){
      ans.push(nums[i+1]);
    };
  };
  return ans;
};