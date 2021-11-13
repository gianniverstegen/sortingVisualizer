let allArrays = [];

function quickSort(array, leftIDX, rightIDX) {
  let swaps = [];
  // make an array of all arrays to animate
  allArrays = [];
  // push the unsorted array
  allArrays.push([array.slice(), 0, 0, array.length - 1]);
  sortSubArray(leftIDX, rightIDX, swaps);
  console.log(swaps);
  return [allArrays, swaps];
}

function sortSubArray(leftIDX, rightIDX, swaps) {
  // if the length of the subarray is smaller than two we return
  if (Math.abs(rightIDX - leftIDX) < 2) {
    return;
  }

  // im not sure whether to save the indeces or not
  // change this
  let savedLeftIDX = leftIDX;
  let savedRightIDX = rightIDX;

  // pull the array from the top of the allArray stack to treat
  let arrayToTreat = allArrays[allArrays.length - 1][0].slice();
  // assign the 0th element of the subarray as the pivot
  let pivot = arrayToTreat[leftIDX];

  // change this
  let arrayWithoutSubArray = getArrayWithoutSubArray(
    arrayToTreat.slice(),
    leftIDX,
    rightIDX
  );

  let lesserArray = [];
  let greaterArray = [];
  // loop over the subarray and assign values smaller than
  // the pivot to the lesserarray and bigger to the greaterarray
  for (let i = leftIDX + 1; i < rightIDX; i++) {
    if (arrayToTreat[i] > pivot) {
      greaterArray.push(arrayToTreat[i]);
    } else {
      lesserArray.push(arrayToTreat[i]);
    }
  }

  // also push the pivot to the lesser array, so it is the "middle"
  // element in the list
  lesserArray.push(pivot);

  // sort the subarray
  let arrayWithSortedSubArray = joinArrays(
    arrayWithoutSubArray,
    lesserArray.concat(greaterArray),
    leftIDX
  );

  // push it to the stack
  allArrays.push([
    arrayWithSortedSubArray,
    savedLeftIDX,
    leftIDX + lesserArray.length - 1,
    savedRightIDX,
  ]);

  // go left of the pivot
  sortSubArray(savedLeftIDX, leftIDX + lesserArray.length - 1, swaps);

  // go right of the pivot
  sortSubArray(leftIDX + lesserArray.length, savedRightIDX, swaps);
}

function getArrayWithoutSubArray(arrayToSort, leftIDX, rightIDX) {
  // replace all subarray elements with a zero, as a placholder
  for (let i = leftIDX; i < rightIDX; i++) {
    arrayToSort[i] = 0;
  }
  return arrayToSort;
}

function joinArrays(futureNewArray, sortedSubArray, leftIDX) {
  // join the sorted subarray with the complete array
  for (let i = 0; i < sortedSubArray.length; i++) {
    futureNewArray[leftIDX + i] = sortedSubArray[i];
  }
  return futureNewArray;
}

export default quickSort;
