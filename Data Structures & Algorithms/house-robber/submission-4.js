class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
      var dp = []
      if(nums.length === 0) return 0
      if(nums.length=== 1) return nums[0]
      dp[0] = nums[0]
      dp[1] = Math.max(nums[0],nums[1])
      for(var i = 2 ; i < nums.length ; i++){
         var res = Math.max(dp[i-1] , dp[i-2] + nums[i])
         dp[i] = res
      }
      return dp[dp.length-1]
    }
}
