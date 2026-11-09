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

        var fre = []
        for(var i = 0 ; i <= nums.length ; i++){
            fre.push([])
        }
        for(var [key, value] of map){
            fre[value].push(key)
        }

        for (let i = fre.length - 1; i >= 0; i--) {

            for (let num of fre[i]) {
                out.push(num);

                if (out.length === k) {
                    return out;
                }
            }
        }
        return out



    }
}
