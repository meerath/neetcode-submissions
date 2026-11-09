class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var maxCon = 0
        var i = 0
        var j = heights.length-1
        while(j > i){
            var wd = j - i 
            var ht = Math.min(heights[i], heights[j])
            var vol = wd * ht
            maxCon = Math.max(maxCon, vol)
            if(Math.min(heights[i], heights[j]) == heights[i]){
                i++
            } else {
                j--
            }
        }
    
    return maxCon
    }
}
