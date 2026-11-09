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
     * @return {TreeNode}
     */
    invertTree(root) {
        // if(root.length == 0){
        //     return[]
        // }
     return this.traversal(root)
    }
    traversal(root){
        if(root == null){
            return null
        }
        var temp = root.left
        root.left = root.right
        root.right = temp
        if(root.left){
             this.traversal(root.left)
        }
        if(root.right){
          this.traversal(root.right)
        }
        return root

    }

}
