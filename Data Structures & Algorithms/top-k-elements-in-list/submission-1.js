class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var map = new Map()
        var out  = []
        for(var i = 0 ; i < nums.length ; i++){
            if(map.has(nums[i])){
                var val = map.get(nums[i])
                map.set(nums[i], val + 1 )
            } else {
                 map.set(nums[i], 1 )
            }
        }
        var arr = [...map.entries()]
        arr.sort((a,b) => b[1] - a[1])
        for(var i = 0 ; i < k ; i++){
            out.push(arr[i][0])
        }
        return out
    }
}
