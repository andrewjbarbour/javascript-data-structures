const quickSort = (array, leftBound=0, rightBound=array.length-1) => {
    if(array.length > 1){
        if(rightBound > leftBound){
            const pivotIndex = partition(array, leftBound, rightBound);
            quickSort(array, leftBound, pivotIndex-1);
            quickSort(array, pivotIndex, rightBound);
        }
    }
    return array;
}

const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
    while (leftIndex <= rightIndex){
        while(array[leftIndex] < pivot){
            leftIndex++;
        }
        while(array[rightIndex] > pivot){
            rightIndex--;
        }
        if(leftIndex <= rightIndex){
            swap(array, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }
    return leftIndex;
}

const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
}

console.log(quickSort([91, 3, 25, 10, 17, 451]))