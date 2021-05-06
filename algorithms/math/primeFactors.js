export const primeFactors = (n) => {
    /**Computes the prime factors of a number*/
    const factors = [];

    for (let factor = 2; factor < Math.sqrt(n); factor++){
        while (n % factor === 0){
            n /= factor;
            factors.push(factor);
        }
    }

    if(n !==1){
        factors.push(n);
    }

    return factors;
}