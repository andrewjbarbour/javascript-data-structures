export const flipBit = (num) => {
    //Return the longest series of 1s that can be created by changing one digit in a number
    if(~num === 0) return (num >>> 0).toString(2).length;
    let currentLength = 0;
    let previousLength = 0
    let maxLength = 1;
    while(num !== 0){
        if((num & 1) === 1){
            currentLength++;
        } else if ((num & 1) == 0){
            previousLength = (num & 2) == 0 ? 0: currentLength;
            currentLength = 0;
        }
        maxLength = Math.max(previousLength + currentLength + 1, maxLength);
        num >>>= 1;
    }
    return maxLength;
}
