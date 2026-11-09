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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        var curr1 = list1
        var curr2 = list2
        var curr3 = new ListNode(-1)
        var head = curr3
        var res 
        while(curr1 != null &&  curr2 != null ){
            if(curr1.val <= curr2.val){
                curr3.next = curr1
                curr1 = curr1.next
                curr3 = curr3.next
            } else {
               curr3.next = curr2
                curr2 = curr2.next
                curr3 = curr3.next
            }
            
        }
        while(curr1 != null){
           curr3.next = curr1
                curr1 = curr1.next
                curr3 = curr3.next
        }
         while(curr2 != null ){
            curr3.next = curr2
                curr2 = curr2.next
                curr3 = curr3.next
        }
       return head.next
    }
}
