export const fastPowering = (base, power) => {
    /** Fast powering algorithm for computing power in log(N) time */
    if(power === 0){
        return 1;
    }

    if(power % 2 === 0){
        const multiplier = fastPowering(base, power / 2);
        return multiplier * multiplier;
    }

    const multiplier = fastPowering(base, Math.floor(power / 2));
    return multiplier * multiplier * base;
}

export default fastPowering;