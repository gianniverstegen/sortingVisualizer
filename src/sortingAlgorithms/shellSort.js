function shellSort(array) {
  let swaps = [];

  for (
    let gap = Math.floor(array.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < array.length; i += 1) {
      let temp = array[i];

      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
        swaps.push([j, j - gap]);
      }
      array[j] = temp;
    }
  }

  return [array, swaps];
}

export default shellSort;
