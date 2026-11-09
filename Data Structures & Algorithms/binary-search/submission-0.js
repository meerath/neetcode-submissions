class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.binarySearch(nums, target, 0, nums.length-1)
        
    }

    binarySearch(nums, target, s, e){
        if(s> e){
            return -1
        }
        var mid = Math.floor((s + e) / 2);
        if(nums[mid]== target){
            return mid
        }
        if(nums[mid] < target){
            return this.binarySearch(nums, target, mid+1, e)
        } else {
            return this.binarySearch(nums, target, s, mid-1)
        }
    }

}
