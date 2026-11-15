/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        var res = []
        var q = []
        
        if(root == null) return res
        q.push([root, 0])
        while(q.length>0){
           var node = q.shift()
           var curr = node[0]
           var lev = node[1]
           if(res[lev]){
              res[lev].push(curr.val)
           } else {
            res[lev] = ([curr.val])
           }    
           if(curr.left){
               q.push([curr.left, lev+1])
           }
            if(curr.right){
               q.push([curr.right, lev+1])
           }
           
        }
        return res
    }
}
