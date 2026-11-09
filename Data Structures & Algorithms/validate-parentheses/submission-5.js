class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var st = []
        for(var i = 0; i < s.length ; i++){
             if(s[i] == "{" || s[i] == "(" || s[i] == "["){
                st.push(s[i])
             } else {
                if(s[i] == "}" && st[st.length-1] != "{" 
                || s[i] == "]" &&    st[st.length-1] != "[" 
                || s[i] == ")" && st[st.length-1] != "("){
              return false
             }
             st.pop()
        }
       
       
    }
     if(st.length > 0){
            return false 
        } else return true
    }}

