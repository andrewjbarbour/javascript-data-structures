export const clearBit = (num, i) => {
    const mask = ~(1 << i);
    return num & mask;
}

export const clearBitsBthroughI = (num, i) => {
    const mask = (1 << i) -1;
    return num & mask;
}

export const clearBitsIthrough0 = (num, i) => {
    const mask = (-1 << (i + 1));
    return num & mask;
}