class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // var tot = 0
        // for(var i = 0 ; i<= nums.length; i++){
        //    tot = tot+i
        // }
        var n = nums.length

        var tot = n * (n + 1) / 2
        var curr = 0
        for(var i = 0 ; i< nums.length; i++){
           curr = curr + nums[i]
        }
        return tot - curr

    }
}
