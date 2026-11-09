class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // s = s.toLowerCase().replace(^/[a-z0-9]/g,"")
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        var st = 0
        var e = s.length-1
        while(e >= st){
            if(s[e] != s[st]){
                return false
            } 
                st++
                e--
            
        }
        return true
    }
}
