class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0){
            return 0
        }
        var longest = 1
        var set = new Set()
        for(var i = 0 ; i < nums.length ; i++){
          set.add(nums[i])
        }
        
        for(var val of set){
            if(!set.has(val-1)){
                var count = 1
                while(set.has(val+1)){
                    count++
                    val++
                }
            longest = Math.max(longest , count)
            }
        }

        return longest
    }
}
