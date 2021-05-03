import '../data-structures/Tree/TreeNode.js';

export const lca = (root, value1, value2) => {
    /*Given a root node and two node values, finds the
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
        return lca(root.left, value1, value2);
    }
    else{
        return lca(root.right, value1, value2);
    }
} 