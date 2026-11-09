class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var maxPro = 0
        var l = 0 , r = 1;
        while(r < prices.length && r>= l){
            if(prices[r] > prices[l]){
                var maxPro = Math.max(prices[r] - prices[l] , maxPro)
            } else {
               l = r
            }
            // l++
            r++
        }
        return maxPro
    }
}
