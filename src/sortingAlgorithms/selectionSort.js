function selectionSort(array) {
  let swap = [];

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
      swap.push([i, min]);
    }
  }
  return [array, swap];
}

export default selectionSort;
