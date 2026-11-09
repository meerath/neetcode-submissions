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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
         this.dia = 0
        this.traversal(root)
        return this.dia
    }

    traversal(root){
        if(root == null) return 0
        var lh = this.traversal(root.left)
        var rh = this.traversal(root.right)
        var curr = lh+rh
        this.dia= Math.max( this.dia , curr)
        return Math.max(lh, rh) +1 
      
    }
}
