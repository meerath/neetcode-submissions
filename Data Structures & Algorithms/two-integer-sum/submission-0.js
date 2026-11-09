class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      var map = new Map()
      for(var i = 0; i < nums.length; i++){
        var req = target - nums[i]
        if(map.has(req)){
            return [i, map.get(req)]
        }
        map.set(nums[i], i)
      }

      return [0,0]
    }
}
