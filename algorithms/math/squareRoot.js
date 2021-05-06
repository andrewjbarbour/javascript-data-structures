export const squareRoot = (num, tolerance=0) => {
    /**Calculates the square root of a number with 
     * a given tolerance (precision) using Newton's method*/
    if(num < 0){
        throw new Error('This method only supports positive integers');
    }

    if(num === 0){
        return 0;
    }

    let root = 1;
    const requiredDelta = 1 / (10 ** tolerance);

    while(Math.abs((root ** 2) - num) > requiredDelta){
        root -= ((root ** 2) - num ) / (root * 2);
    }

    return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}
