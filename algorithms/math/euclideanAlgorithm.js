export const euclideanAlgorithm = (a, b) => {
    /**Returns the greatest common divisor (gcd)
     * of the integers a and b */
    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

export default euclideanAlgorithm;