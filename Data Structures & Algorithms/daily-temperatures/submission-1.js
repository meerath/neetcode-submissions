class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
        var res = [];
        var st = []
        for(var i = t.length -1 ; i >= 0; i--){
          while(st.length > 0 && t[st[st.length -1]] <= t[i]){
            st.pop()
            // st.push(i)
          }
          if(st.length == 0){
            res[i] = 0
          }
          if(t[st[st.length -1]] > t[i]){
            res[i]= st[st.length -1] - i
          }
           st.push(i)
        }
        return res;
    }
}
