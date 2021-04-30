//Dynamic programming algorithm for the knapsack problem  O(index * weight)

const knapsack = function(weightCap, weights, values) {
    const numItem = weights.length;
    const matrix = new Array(numItem);
    
    for (let index = 0; index <= numItem; index++) {
      matrix[index] = new Array(weightCap + 1);
      for (let weight = 0; weight <= weightCap; weight++) {
        if (index === 0 || weight === 0) {
          matrix[index][weight] = 0;
        } else if (weights[index - 1] <= weight) {
          const includeItem = values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
          const excludeItem = matrix[index - 1][weight];
          matrix[index][weight] = Math.max(includeItem, excludeItem);
        } else {
          matrix[index][weight] = matrix[index - 1][weight];
        }
      }
    }
    return matrix[numItem][weightCap]; 
  };