import '../data-structures/Tree/BinaryTreeNode.js';

const isBST = (root) => {
    return checkBST(root, -Infinity, Infinity);
}

const checkBST = (node, min, max) => {
    if(node === null){
        return true;
    }
    else{
        return min < node.value && node.value < max &&
        checkBST(node.left, min, node.value) &&
        checkBST(node.right, node.data, max);
    }
}

