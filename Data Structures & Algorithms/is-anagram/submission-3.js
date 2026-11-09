class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    var sMap  = new Map()
     var tMap = new Map()
     if (s.length !== t.length) return false;
     for(var i = 0 ; i < s.length; i++){
        sMap.set(s[i], sMap.get(s[i]) > 0 ? sMap.get(s[i]) +1 : 1)
     }
     for(var i = 0 ; i < t.length; i++){
        tMap.set(t[i], tMap.get(t[i]) > 0 ? tMap.get(t[i]) +1 : 1)
     }

     for(let [key, value] of sMap){
           if(!tMap.has(key)){
            return false
           } else {
             if(tMap.get(key) !== value){
                return false
             }
           }
     }
     return true

    }
}
