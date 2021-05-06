const ways = []
ways[0] = 1;
ways[1] = 1;

export const staircase = (n) => {
    /*Calculates total permutations of steps to climb
     a staircase taken 1, 2, or 3 steps at a time*/
    if(n < 0){
        return 0;
    }
    else if(n === 0 || n === 1  ){
        return 1;
    }
    else if(!ways[n]){
        ways[n] = staircase(n-1) + staircase(n-2) + staircase(n-3);
    }
    return ways[n];
}