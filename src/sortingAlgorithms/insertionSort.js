function insertionSort(array) {
  let swaps = [];
  let arrayLength = array.length;
  for (let i = 1; i < arrayLength; i++) {
    let current = array[i];

    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      swaps.push([j + 1, j]);
      j--;
    }
    array[j + 1] = current;
  }
  return [array, swaps];
}

export default insertionSort;
