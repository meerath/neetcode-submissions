class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) return 0 
        if(nums.length === 1) return  nums[0]
        return Math.max(this.getMax(nums, 0 ,nums.length -2) , this.getMax(nums, 1,nums.length -1))
    }

    getMax(nums , s , e){
        // var arr= nums.slice(s, e + 1)
        // if(arr.length === 0) return 0 
        // if(arr.length === 1) return  arr[0]
         if (s === e) return nums[s];
        var dp = []
        dp[s] = nums[s]
        dp[s+1] = Math.max(nums[s], nums[s+1])
        for(var i = s+2 ; i <=e ; i++){
            var res  = Math.max(dp[i-1], dp[i-2] + nums[i])
            dp[i] = res
        }
        return dp[dp.length -1]
    }
}
