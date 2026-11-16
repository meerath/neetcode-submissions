class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        var l = 0
        var r = 0
        var count = 0
        while(r < nums.length -1){
          var far = 0
          for(var i = l ; i<= r; i++){
            far = Math.max(far , i+nums[i])
          }
          l = r+1
          r = far
          count++
        }
        return count
    }
}
