/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let head2 = head;
    while (head2 != null && head2.next != null) {
        head = head.next;
        head2 = head2.next.next;
    }
    return head;
};

// var middleNode = function(head) { // step1: naive(ngây thơ) approach
//     let head2 = head;
//     let n = 0;
//     while(head2!=null){
//         n++;
//         head2 = head2.next;
//     }
//     n = n>>1;
//     while(n>0){
//         n--;
//         head = head.next;
//     }
//     return head;
// };