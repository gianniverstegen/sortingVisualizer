import NavigationBar from "./components/NavigationBar";
import SortingVisualizer from "./components/SortingVisualizer";
import quickSort from "./sortingAlgorithms/quickSort";
import bubbleSort from "./sortingAlgorithms/bubbleSort";
import shellSort from "./sortingAlgorithms/shellSort";
import heapSort from "./sortingAlgorithms/heapSort";
import selectionSort from "./sortingAlgorithms/selectionSort";
import insertionSort from "./sortingAlgorithms/insertionSort";
import React, { useState } from "react";

import testArray from "./testArray";

function App() {
  const [arrayToSort, setArrayToSort] = useState(testArray);
  const [sortingAlgorithm, setSortingAlgorithm] = useState(
    "CHOOSE AN ALGORITHM"
  );

  const bubbleAnTime = 3;
  const shellAnTime = 40;
  const quickAnTime = 200;
  const selectionAnTime = 80;
  const insertionAnTime = 15;

  function sortArray() {
    if (sortingAlgorithm === "BUBBLE SORT") {
      let result = bubbleSort(arrayToSort.slice());
      let swaps = result[1];
      animateInPlace(swaps, bubbleAnTime);
    } else if (sortingAlgorithm === "SHELL SORT") {
      let result = shellSort(arrayToSort.slice());
      animateShell(result[1]);
    } else if (sortingAlgorithm === "HEAP SORT") {
      let result = heapSort(arrayToSort.slice());
      animateShell(result[1]);
    } else if (sortingAlgorithm === "SELECTION SORT") {
      let result = selectionSort(arrayToSort.slice());
      animateInPlace(result[1], selectionAnTime);
    } else if (sortingAlgorithm === "INSERTION SORT") {
      let result = insertionSort(arrayToSort.slice());
      animateInPlace(result[1], insertionAnTime);
    } else if (sortingAlgorithm === "QUICK SORT") {
      let result = quickSort(arrayToSort.slice(), 0, arrayToSort.length);
      animateQuick(result[0]);
    }
  }

  function animateInPlace(swaps, anTime) {
    let unsortedArray = arrayToSort.slice();
    for (let i = 0; i <= swaps.length; i++) {
      if (i === swaps.length) {
        setTimeout(() => {
          console.log("done", unsortedArray);
          setArrayToSort(unsortedArray);
        }, i * anTime);
        return;
      }
      setTimeout(() => {
        let helperOldPlace = swaps[i][0];
        let helperNewPlace = swaps[i][1];
        // swap values in the array
        let temp = unsortedArray[helperOldPlace];
        unsortedArray[helperOldPlace] = unsortedArray[helperNewPlace];
        unsortedArray[helperNewPlace] = temp;

        // HTML height and classname stuff
        let newPlaceHTML = document.getElementById(helperNewPlace).style;
        let oldPlaceHTML = document.getElementById(helperOldPlace).style;
        newPlaceHTML.height = `${unsortedArray[helperNewPlace]}px`;
        newPlaceHTML.marginTop = `${477 - unsortedArray[helperNewPlace]}px`;
        oldPlaceHTML.height = `${unsortedArray[helperOldPlace]}px`;
        oldPlaceHTML.marginTop = `${477 - unsortedArray[helperOldPlace]}px`;
        document.getElementById(helperOldPlace).className =
          "arrayElement-isSelected";
        document.getElementById(helperNewPlace).className =
          "arrayElement-isSelected";
        setTimeout(() => {
          document.getElementById(helperOldPlace).className = "arrayElement";
          document.getElementById(helperNewPlace).className = "arrayElement";
        }, anTime);
      }, i * anTime);
    }
  }

  function animateShell(swaps) {
    let unsortedArray = arrayToSort.slice();
    for (let i = 0; i <= swaps.length; i++) {
      // check pathfinding visualizer to see how to set state
      if (i === swaps.length) {
        setTimeout(() => {
          console.log("done", unsortedArray);
          setArrayToSort(unsortedArray);
        }, i * shellAnTime);
        return;
      }
      setTimeout(() => {
        let helperOldPlace = swaps[i][0];
        let helperNewPlace = swaps[i][1];
        // swap values in the array
        let temp = unsortedArray[helperOldPlace];
        unsortedArray[helperOldPlace] = unsortedArray[helperNewPlace];
        unsortedArray[helperNewPlace] = temp;

        // HTML height and classname stuff
        let newPlaceHTML = document.getElementById(helperNewPlace).style;
        let oldPlaceHTML = document.getElementById(helperOldPlace).style;
        newPlaceHTML.height = `${unsortedArray[helperNewPlace]}px`;
        newPlaceHTML.marginTop = `${477 - unsortedArray[helperNewPlace]}px`;
        oldPlaceHTML.height = `${unsortedArray[helperOldPlace]}px`;
        oldPlaceHTML.marginTop = `${477 - unsortedArray[helperOldPlace]}px`;
        document.getElementById(helperOldPlace).className =
          "arrayElement-isSelected";
        document.getElementById(helperNewPlace).className =
          "arrayElement-isSelected";
        setTimeout(() => {
          document.getElementById(helperOldPlace).className = "arrayElement";
          document.getElementById(helperNewPlace).className = "arrayElement";
        }, shellAnTime);
      }, i * shellAnTime);
    }
  }

  function animateQuick(result) {
    for (let i = 0; i <= result.length; i++) {
      // check pathfinding visualizer to see how to set state
      if (i === result.length) {
        setTimeout(() => {
          setArrayToSort(result[result.length - 1][0]);
          console.log("hi", i);
        }, i * quickAnTime);
        return;
      }
      setTimeout(() => {
        let leftIDX = result[i][1] - 1;
        let pivotIDX = result[i][2];
        let rightIDX = result[i][3] + 1;
        if (rightIDX >= 105) rightIDX = rightIDX - 2;
        if (leftIDX === -1) leftIDX++;
        document.getElementById(leftIDX).className = "arrayElement-isPointer";
        document.getElementById(rightIDX).className = "arrayElement-isPointer";
        document.getElementById(pivotIDX).className = "arrayElement-isPivot";
        setArrayToSort(result[i][0]);
        setTimeout(() => {
          document.getElementById(pivotIDX).className = "arrayElement";
          document.getElementById(leftIDX).className = "arrayElement";
          document.getElementById(rightIDX).className = "arrayElement";
        }, Math.floor(quickAnTime * 1.2));
      }, i * quickAnTime);
    }
  }

  function createRandomArray() {
    let randomArray = [];
    for (let i = 0; i < 105; i++) {
      let randomNumber = Math.floor(Math.random() * 450);
      randomArray.push(randomNumber);
    }
    setArrayToSort(randomArray);
  }

  function sortingAlgorithmHandler(id) {
    setSortingAlgorithm(id);
  }

  return (
    <div className="App">
      <NavigationBar
        createRandomArray={createRandomArray}
        sortArray={sortArray}
        sortingAlgorithmHandler={sortingAlgorithmHandler}
        sortingAlgorithm={sortingAlgorithm}
      />
      <SortingVisualizer arrayToSort={arrayToSort} />
    </div>
  );
}

export default App;
