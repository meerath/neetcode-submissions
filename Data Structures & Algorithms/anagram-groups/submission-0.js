class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        var map = new Map()
        for(var i = 0 ; i < strs.length; i++){
            var sorted = strs[i].split("").sort().join()
            // map.set(sorted, map.get(sorted).length > 0 ? map.get(sorted).push(strs[i]) : [strs[i]])
            if (map.has(sorted)) {
                map.get(sorted).push(strs[i]);
            } else {
                map.set(sorted, [strs[i]]);
            }
        }

        var out = []
        for(var [key, value] of map){
           out.push(value)
        }

        return out
        
    }
}
