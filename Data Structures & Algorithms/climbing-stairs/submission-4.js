class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        var dp = []
        dp[0] = 0
        dp[1] = 1
        dp[2] = 2
        
       return this.getAnsHelper(n , dp)
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
