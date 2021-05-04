import BinaryTreeNode from '../data-structures/Tree/BinaryTreeNode.js';

export const isSubtree = (t1, t2) => {
    //Given two trees, compares whether t2 is a subtree of t1.
    if(t1.left == null && t2.left == null) {
        return false;
    } else if(t1.value == t2.value && compareTrees(t1, t2)){
        return true;
    }
    return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
}

export const compareTrees = (t1, t2) => {
    if(t1 === null && t2 === null){
        return true;
    } else if (r1 == null || r2 == null){
        return false;
    } else if (r1.value !== r2.value){
        return false;
    } else {
        return compareTrees(r1.left, r2.left) && compareTrees(r1.right, r2.right);
    }
}