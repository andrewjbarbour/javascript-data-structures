export const updateBit = (num, i) => {
    const value = bitIs1 ? 1 : 0;
    const mask = ~(1 << i);
    return (num & mask) | (value << i);
}