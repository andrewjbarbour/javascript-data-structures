export const isPowerOfTwo = num => {
    /**Determines whether a number is a power of two */
    if (num < 1) {
        return false
    }

    let dividedNumber = num;
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0){
            return false;
        }
        dividedNumber /= 2;
    }
    return true;
}
