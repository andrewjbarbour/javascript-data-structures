import euclideanAlgorithm from './euclideanAlgorithm.js';

export const lcm = (a, b) => {
    /**Computes the lcm of two integers a and b */
    if(a === 0 || b === 0) return 0;
    return (Math.abs(a * b)/euclideanAlgorithm(a, b));
}