class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var i = 0
        var j = numbers.length-1
        while(j > i){
            var res = numbers[i] + numbers[j]
            if(res == target){
                return [i+1, j+1]
            } else if(res > target){
                j--
            } else {
                i++
            }
        }
    }
}
