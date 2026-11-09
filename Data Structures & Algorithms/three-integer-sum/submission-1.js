class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        var res = []
        var uniQue = new Set()
        for(var i = 0 ; i < nums.length ; i++){
            var  tar = -nums[i]
             var set = new Set()
            for(var j = i+1 ; j < nums.length ; j++){
                var toFind = tar - nums[j]
                if(set.has(toFind)){
                    var arr = [nums[i] , nums[j], toFind]
                    arr.sort((a,b) => a - b)
                    var str = arr.join(",")
                    if(!uniQue.has(str)){
                      uniQue.add(str)
                      res.push(arr)
                    }
                } else {
                    set.add(nums[j])
                }

            }
          
        }
        
    return res
    }
}
