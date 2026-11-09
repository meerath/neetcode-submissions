class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var i=0
        var set = new Set()
        var res = 0
        
        for(var j = 0 ; j < s.length ; j++){
            // var currLen = 0

            while(set.has(s[j])){
                set.delete(s[i])
                // currLen = currLen -1
                i++
            }
            set.add(s[j])
            // currLen = currLen + 1
            res = Math.max(res,j - i + 1 )
        }

        return res
     

    }
}
