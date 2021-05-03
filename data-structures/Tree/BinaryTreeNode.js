export default class BinaryTreeNode{
  
    /*Unlike TreeNode, this binary tree node is designed to be
     implemented by itself as a standalone class without a parent tree class.*/

    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    setValue(value){
        this.value = value;
    }

    setLeft(value){
        value instanceof BinaryTreeNode 
        ? this.left = value 
        : this.left = new BinaryTreeNode(value);
    }

    setRight(value){
        value instanceof BinaryTreeNode
        ? this.right = value
        : this.right = new BinaryTreeNode(value);
    }

    getHeight(root=this){
        let leftHeight = 0;
        let rightHeight = 0;
        if(root.left !== null){
            leftHeight = this.getHeight(root.left) + 1;
        }
        if(root.right !==null){
            rightHeight = this.getHeight(root.right) + 1;
        }
        return Math.max(leftHeight, rightHeight);
    }

    traverseInOrder(){
        let traverse = [];
        if (this.left){
            traverse = traverse.concat(this.left.traverseInOrder());
        }
        traverse.push(this.value);
        if (this.right){
            traverse = traverse.concat(this.right.traverseInOrder());
        }
        return traverse;
    }
}