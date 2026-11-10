class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        var prefixSum = []
        var count = 0
        prefixSum[0] = nums[0]
        var map = new Map()
        for(var i = 1 ; i < nums.length ; i++){
              prefixSum[i] = prefixSum[i-1] + nums[i]
        }
        for(var j = 0 ; j< nums.length ; j++){
            if(prefixSum[j] == k){
                count++
                // map.set(prefixSum[j] , 1)
            }
            var val = prefixSum[j] - k
            if(map.has(val)){
                count = count +  map.get(val)
                // map.set(prefixSum[j], map.get(prefixSum[j]) + 1)
            } 
             map.set(prefixSum[j],(map.get(prefixSum[j]) || 0) + 1
            )

        }
        return count++
    }
}
