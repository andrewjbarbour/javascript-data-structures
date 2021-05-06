export const bitSwaps = (a, b) => {
    /*Given two numbers, determines how many bit
    swaps are necssary to make the numbers equivalent */
    let count = 0;
    let c = a ^ b;
    while (c !== 0){
        count += c & 1;
        c >>>= 1;
    }
}