export const clearBit = (num, i) => {
    let mask = ~(1 << i);
    return num & mask;
}