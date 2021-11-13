import React from "react";

const NavigationBar = ({
  createRandomArray,
  sortArray,
  sortingAlgorithmHandler,
  sortingAlgorithm,
}) => {
  return (
    <div id="navigationBar">
      <div id="header-selector">
        {sortingAlgorithm}
        <div className="header-dropdown">
          <div>
            <div onClick={() => sortingAlgorithmHandler("HEAP SORT")}>
              Heap Sort
            </div>
            <div onClick={() => sortingAlgorithmHandler("SHELL SORT")}>
              Shell Sort
            </div>
            <div onClick={() => sortingAlgorithmHandler("QUICK SORT")}>
              Quick Sort
            </div>
            <div onClick={() => sortingAlgorithmHandler("BUBBLE SORT")}>
              Bubble Sort
            </div>
            <div onClick={() => sortingAlgorithmHandler("SELECTION SORT")}>
              Selection Sort
            </div>
            <div onClick={() => sortingAlgorithmHandler("INSERTION SORT")}>
              Insertion Sort
            </div>
          </div>
        </div>
      </div>
      <button id="randomizeButton" onClick={createRandomArray}>
        CREATE AN ARRAY
      </button>
      <button id="sortButton" onClick={sortArray}>
        SORT
      </button>
    </div>
  );
};

export default NavigationBar;
