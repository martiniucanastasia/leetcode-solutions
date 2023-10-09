class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseList = (head) => {
  let previousNode = null;
  let currentNode = head;

  while (currentNode) {
    [currentNode.next, previousNode, currentNode] = [
      previousNode,
      currentNode,
      currentNode.next,
    ];
  }

  return previousNode;
};

// Example usage:

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

// Reversing the linked list
const reversedHead = reverseList(head);

// Print reversed linked list
let currentNode = reversedHead;
while (currentNode) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}

// Output: 5 4 3 2 1