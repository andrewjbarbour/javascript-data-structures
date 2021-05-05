export const pathSums = (root, targetSum) => {
    //Counts the total number of paths in a binary tree that sum to a value
    if(root === null) return 0;
    let pathsFromRoot = sumsFromNode(root, targetSum, 0);
    let pathsOnLeft = pathSums(root.left, targetSum);
    let pathsOnRight = pathSums(root.right, targetSum);

    return pathsFromRoot + pathsOnLeft + pathsOnRight;
}

export const sumsFromNode = (node, targetSum, currentSum) => {
    if(node === null) return 0;
    currentSum += node.value;

    let totalPaths = 0;
    if (currentSum === targetSum){
        totalPaths++;
    }

    totalPaths += sumsFromNode(node.left, targetSum, currentSum);
    totalPaths += sumsFromNode(node.right, targetSum, currentSum);
}