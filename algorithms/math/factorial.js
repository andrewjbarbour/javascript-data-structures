const factorial = (num) => {
    /**returns the factorial of a given number */
    if(num === 0){
        return 1;
    }
    let result = 1;
    for(let i = 2; i <= num; i+=1){
        result *= i;
    }
    return result;
}

export default factorial;

