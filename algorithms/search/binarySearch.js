const binarySearch = (array, target) => {
    //A pared down binary search algorithm. Uncomment the logs below to log searching.
    let startIndex = 0;
    let endIndex = array.length - 1;
    let count = 0;
    while(startIndex <=endIndex){
        let middleIndex = Math.floor((startIndex + endIndex)/2);
        count++;
        if(target === array[middleIndex]){
            return middleIndex;
            //console.log(`Target ${target} found after ${count} iterations`);
        }
        else if(target > array[middleIndex]){
            startIndex = middleIndex + 1;
            //console.log("Searching right side");
        }
        else if(target < array[middleIndex]){
            endIndex = middleIndex - 1;
            //console.log("Searching left side");
        }
    }
    return null;
}