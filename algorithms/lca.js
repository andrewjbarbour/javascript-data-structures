import '../data-structures/Tree/TreeNode.js';

export const binarySearchTreeLca = (root, value1, value2) => {
    /*Given a root node and two node values of a binary search tree, finds the
    least common ancestor of the two nodes within the tree*/
    if(root === null){
        return null;
    }
    if(value1 === value2){
        return null;
    }
    if(value1 === root.value || value2 === root.value){
        return root;
    }

    if((value1 < root.value && value2 > root.value) || (value1 > root.value && value2 < root.value)){
        return root;
    }

    if(value1 < root.value && value2 < root.value){
        return binarySearchTreeLca(root.left, value1, value2);
    }
    else{
        return binarySearchTreeLca(root.right, value1, value2);
    }
} 

export const binaryTreeLca = (root, node1, node2) => {
    /*Given a root and two nodes of a binary tree that is not necessarily
     a binary search tree, finds the least common ancestor*/
    if(!covers(root, node1) || !covers(root, node2)){
        return null;
    }
    return ancestorHelper(root, node1, node2);
}

export const ancestorHelper = (root, node1, node2) => {
    if(root == null || root == node1 || root == node2){
        return root;
    }

    let n1IsOnLeft = covers(root.left, node1);
    let n2IsOnLeft = covers(root.right, node2);
    if(n1IsOnLeft != n2IsOnLeft){
        return root;
    }
    let childSide = n1IsOnLeft ? root.left : root.right;
    return ancestorHelper(childSide, node1, node2);
}

export const covers = (root, node) => {
    //Determines whether a child node is in the tree, or in a given side of it;
    if(root === null){
        return false;
    }
    if(root === node){
        return true;
    }
    return covers(root.left, node) || covers(root.right, node);
}