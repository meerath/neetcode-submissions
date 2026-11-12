class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var i = 0 
        var j = nums.length- 1
        while(j >= i){
            var mid =Math.floor((i+j)/2)
            if(nums[mid] == target){
                return mid
            }
            if(nums[mid] >= nums[i]){
                //left is sorted
                if(nums[i] <= target && target < nums[mid]){
                   j = mid-1
                } else {
                    i = mid +1 
                }

            } else {
                 if(nums[mid] < target && target <= nums[j]){
                   i = mid + 1
                } else {
                    j = mid-1
                }

            }
        }
        return -1
    }
}
