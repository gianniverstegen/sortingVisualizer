import React from "react";

const SortingVisualizer = ({ arrayToSort }) => {
  return (
    <div id="sortingVisualizer">
      <div id="graphArea">
        <div id="elementHolder">
          {arrayToSort.map((element, IDX) => {
            return (
              <div
                className="arrayElement"
                key={IDX}
                id={IDX}
                style={{
                  height: `${element}px`,
                  marginTop: `${477 - element}px`,
                }}
              >
                {/* {element} */}
              </div>
            );
          })}
        </div>
        <div id="graphBar"></div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
