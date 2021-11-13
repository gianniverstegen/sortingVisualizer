function heapSort(array) {
  var swaps = [];
  buildMaxHeap(array, swaps);
  let lastElement = array.length - 1;

  while (lastElement > 0) {
    swap(array, 0, lastElement, swaps);
    heapify(array, 0, lastElement, swaps);
    lastElement -= 1;
  }

  return [array, swaps];
}

function buildMaxHeap(array, swaps) {
  let i = Math.floor(array.length / 2 - 1);
  while (i >= 0) {
    heapify(array, i, array.length, swaps);
    i -= 1;
  }
}

function heapify(heap, i, max, swaps) {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    if (index === i) {
      return;
    }

    swap(heap, i, index, swaps);

    i = index;
  }
}

function swap(array, firstItemIndex, lastItemIndex, swaps) {
  const temp = array[firstItemIndex];
  array[firstItemIndex] = array[lastItemIndex];
  array[lastItemIndex] = temp;
  swaps.push([firstItemIndex, lastItemIndex]);
}

export default heapSort;
