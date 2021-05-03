//Given a sorted array of values, creates a binary search tree of minimal height
import BinaryTreeNode from '../data-structures/Tree/BinaryTreeNode.js';

export const minimalTree = (array) => {
    return createMinimalBST(array, 0, array.length-1);
}

export const createMinimalBST = (array, start, end) => {
    if (end < start) {
        return null;
    }
    let mid = (start + end) / 2;
    let minTree = new BinaryTreeNode(array[mid])
    minTree.left = createMinimalBST(array, start, mid - 1);
    minTree.right = createMinimalBST(arr, mid + 1, end);
    return minTree;
}