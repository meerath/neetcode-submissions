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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.getHeight(root) != -1
    }
    getHeight(root){
        if(root == null){
            return 0
        }
        var lh = this.getHeight(root.left)
         var rh = this.getHeight(root.right)
          if(Math.abs(lh - rh) > 1){
            return -1
         }
         if(lh == -1 || rh == -1){
            return -1
         }
        
         return Math.max(lh, rh) +1
    }
}
