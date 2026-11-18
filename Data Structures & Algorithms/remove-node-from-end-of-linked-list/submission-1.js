/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        var count = this.countSize(head)
        var rei  = count - n
        if(rei === 0) return head.next
        var curr = head
        for (var i = 0 ; i < rei -1 ; i++){
            curr= curr.next
        }
        curr.next = curr.next.next



         return head

    }
    countSize(head){
        if(head == null){
            return 0
        }
        var curr = head
        var count = 0
        while(curr != null){
            count++
            curr = curr.next
        }
        return count
    }
}
