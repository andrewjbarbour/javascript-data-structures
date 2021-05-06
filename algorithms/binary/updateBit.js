export const updateBit = (num, i, bitIs1) => {
    const value = bitIs1 ? 1 : 0;
    const mask = ~(1 << i);
    return (num & mask) | (value << i);
}

console.log((1775 >>> 0).toString(2));

const arr = new Array(5);
console.log(arr[0]);

export const updateBits = (n, m, i, j) => {
    /*Updates the values of the 32-bit number N with the 32-bit number 
    *between bit indexes i and j*/
    if (i > j || i < 0 || j >=32) return 0;
    const allOnes = ~0;
    let left = j < 31 ? (allOnes << (j + 1)) : 0
    let right = ((1<< i) - 1)
    let mask = left | right
    let n_cleared = n & mask;
    let m_shifted = m << i
    return n_cleared | m_shifted;
}