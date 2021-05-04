export const getBit = (num, i) => {
    //finds the bit value at bit i of num
    return ((num & (1 << i)) !== 0) ? 1 : 0;
}

