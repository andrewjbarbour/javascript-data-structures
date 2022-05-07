export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class");
    }
  }

  setPrevNode(node) {
    if (node instanceof Node || node === null) {
      this.prev = node;
    } else {
      throw new Error("Previous node must be a member of the Node class");
    }
  }

  getNextNode() {
    return this.next;
  }
}
