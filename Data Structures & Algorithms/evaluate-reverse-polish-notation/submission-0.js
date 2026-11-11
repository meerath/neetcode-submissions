class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        var st = []
        // var res = 0
        for(var i = 0; i < tokens.length ; i++){
            if(tokens[i] != "+" && tokens[i] != "*" && tokens[i] != "-" && tokens[i] != "/"){
                st.push(Number(tokens[i]))
            } else {
               var b = st.pop();
                var a = st.pop();

                var res = 0;

                if (tokens[i] == "+") {
                    res = a + b;
                } 
                else if (tokens[i] == "-") {
                    res = a - b;
                } 
                else if (tokens[i] == "*") {
                    res = a * b;
                } 
                else if (tokens[i] == "/") {
                    res = Math.trunc(a / b);
                }

                st.push(res);
                
            }
        }
        return st.pop()
    }
}
