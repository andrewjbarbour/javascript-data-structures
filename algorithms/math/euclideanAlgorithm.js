export const euclideanAlgorithm = (a, b) => {
    /**Returns the greatest common divisor (gcd)
     * of the integers a and b */
    console.log(`a ${a}`);
    console.log(`b ${b}`)
    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

console.log(euclideanAlgorithm(9, 27));