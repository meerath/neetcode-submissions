class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        var dp = []
        dp[0] = 1
        dp[1] = 1

        for(var i= 2 ; i <=n ; i++){
           dp[i] = dp[i-1] + dp[i-2]
        }
        return dp[n] 
        
    //    return this.getAnsHelper(n , dp)
    }
    getAnsHelper(n , dp){
      if(dp[n]){
        return dp[n]
      } else {
        var res =  this.getAnsHelper(n-1 , dp) + this.getAnsHelper(n-2 , dp)
        dp[n] = res
        return res
      }
    }
}
