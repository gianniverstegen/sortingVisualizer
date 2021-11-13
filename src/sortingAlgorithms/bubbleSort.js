function bubbleSort(array) {
  let swaps = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swaps.push([j, j + 1]);
      }
    }
  }

  return [array, swaps];
}

export default bubbleSort;
