export const setBit = (num, i) => {
    //sets the bit at i in number to 1
    return num | (1 << i);
}