export default class BinaryTreeNode {
  /*Unlike TreeNode, this binary tree node is designed to be
     implemented by itself as a standalone class without a parent tree class.*/

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  setValue(value) {
    this.value = value;
  }

  setLeft(value) {
    value instanceof BinaryTreeNode
      ? (this.left = value)
      : (this.left = new BinaryTreeNode(value));
  }

  setRight(value) {
    value instanceof BinaryTreeNode
      ? (this.right = value)
      : (this.right = new BinaryTreeNode(value));
  }

  getHeight(root = this) {
    let leftHeight = 0;
    let rightHeight = 0;
    if (root.left !== null) {
      leftHeight = this.getHeight(root.left) + 1;
    }
    if (root.right !== null) {
      rightHeight = this.getHeight(root.right) + 1;
    }
    return Math.max(leftHeight, rightHeight);
  }

  traverseInOrder() {
    let traverse = [];
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }
    traverse.push(this.value);
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }
    return traverse;
  }

  traversePreOrder() {
    let traverse = [];
    traverse.push(this.value);
    if (this.left) {
      traverse = traverse.concat(this.left.traversePreOrder());
    }
    if (this.right) {
      traverse = traverse.concat(this.right.traversePreOrder());
    }
  }

  traversePostOrder() {
    let traverse = [];
    if (this.left) {
      traverse = traverse.concat(this.left.traversePostOrder());
    }
    if (this.right) {
      traverse = traverse.concat(this.right.traversePostOrder());
    }
    traverse.push(this.value);
  }

  nextNode(node) {
    if (node == null) return null;
    if (node.right !== null) {
      return leftMostChild(node.right);
    } else {
      let q = node;
      let x = q.parent;
      while (x !== null && x.left != q) {
        q = x;
        x = x.parent;
      }
      return x;
    }
  }

  leftMostChild(node) {
    if (node === null) {
      return null;
    }
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}
