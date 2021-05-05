export const updateBit = (num, i, bitIs1) => {
    const value = bitIs1 ? 1 : 0;
    const mask = ~(1 << i);
    return (num & mask) | (value << i);
}

console.log((1775 >>> 0).toString(2));

const arr = new Array(5);
console.log(arr[0]);