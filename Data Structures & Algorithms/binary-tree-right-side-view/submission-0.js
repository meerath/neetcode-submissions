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
     * @return {number[]}
     */
    rightSideView(root) {
       this.s = []
        this.traversal(root, 0)
        return this.s

    }
    traversal(root, lev){
        if(root == null){
            return 
        }
        if(lev == this.s.length){
            this.s.push(root.val)
        }
        this.traversal(root.right, lev+1)
        this.traversal(root.left, lev+1)
     
    }
}
