class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        var prd = new Array(nums.length).fill(1)
        var prefix = new Array(nums.length).fill(1)
        var suffix = new Array(nums.length).fill(1)
        var n = nums.length

        for(var i = 1 ; i < n ; i++){
            prefix[i] = prefix[i-1] * nums[i-1]
        }

        for(var i = n-2 ; i >= 0 ; i--){
            suffix[i] = suffix[i+1] * nums[i+1]
        }

        for(var i = 0 ; i < n ; i++){
            prd[i] = suffix[i] * prefix[i]
        }

        return prd


         
    }
}
