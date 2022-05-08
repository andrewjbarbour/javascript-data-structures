const insertionSort = (array) => {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};

console.log(insertionSort([321, 24, 5, 8, 11, 9443]));
