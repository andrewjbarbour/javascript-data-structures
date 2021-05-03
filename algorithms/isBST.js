import '../data-structures/Tree/BinaryTreeNode.js';

export const isBST = (root) => {
    //Given a root node, checks whether a tree is a binary search tree
    return checkBST(root, -Infinity, Infinity);
}

export const checkBST = (node, min, max) => {
    if(node === null){
        return true;
    }
    else{
        return min < node.value && node.value < max &&
        checkBST(node.left, min, node.value) &&
        checkBST(node.right, node.value, max);
    }
}

