"use client";
import { useState, useEffect } from "react";
import levels from "@/levels"; 
import Timer from "@/components/Timer";


// show errors when too many one element in a cell, X and = is not followed 
// responsive
// more levels


export default function GameBoard() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const level = levels[currentLevel];

  // Timer
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setSecondsElapsed((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval); // cleanup on unmount
}, []);


  const [gridState, setGridState] = useState(
    () => level.cellGrid.map(row => [...row])
  );
  const [initialGrid] = useState(
    () => level.cellGrid.map(row => [...row])
  );

  const [horizontalRules] = useState(level.horizontalRules);
  const [verticalRules] = useState(level.verticalRules);

  const handleToggle = (row, col) => {
  if (initialGrid[row][col] !== "empty") return; // Prevent changing initial value

  setGridState(prevGrid => {
    const newGrid = prevGrid.map(row => [...row]);
    const current = newGrid[row][col];

    if (current === "empty") newGrid[row][col] = "orange";
    else if (current === "orange") newGrid[row][col] = "blue";
    else newGrid[row][col] = "empty";

    if (checkWin(newGrid)) {
      alert("🎉 You win!");
    }

    return newGrid;
  });
  };

  const checkWin = (grid) => {
  const solution = level.solutionGrid;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (grid[i][j] !== solution[i][j]) return false;
    }
  }
  return true;
};



  const clearGrid = () => {
    setGridState(initialGrid.map(row => [...row]));
  };

  const nextLevel = () => {
    const next = currentLevel + 1;
    if (next < levels.length) {
      setCurrentLevel(next);
      const newLevel = levels[next];
      setGridState(newLevel.cellGrid.map(row => [...row]));
    }
  };

  return (
    <div className="items-center justify-items-center w-[50%] h-auto bg-white p-2 pb-20 gap-16 sm:p-5 rounded-2xl">
      <div className="w-full h-auto mb-2 flex items-center justify-between gap-2 border-b-2 border-gray-100 p-2">
        <h1>Tango Game - Level {currentLevel + 1}</h1>
        <div className="flex gap-5 items-center">
          <Timer secondsElapsed={secondsElapsed} />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
            onClick={clearGrid}
          >
            Clear
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer"
            onClick={nextLevel}
          >
            Next Level
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-1">
        {gridState.map((rowArr, row) =>
          rowArr.map((cell, col) => {
          const isGray = (row + col) % 2 === 1;

        return (
          <div key={`${row}-${col}`} className="relative">
            <div
              className={`h-20 w-20 border rounded-2xl border-gray-400 ${
                isGray ? "bg-gray-100" : "bg-white"
              } flex items-center justify-center`}
              onClick={() => handleToggle(row, col)}
            >
              {cell !== "empty" && (
                <div
                  className={`w-10 h-10 rounded-full ${
                    cell === "orange" ? "bg-orange-500" : "bg-blue-500"
                  }`}
                ></div>
              )}
            </div>

            {/* Horizontal Rule (to the right of this cell) */}
            {col < 5 && horizontalRules[row]?.[col] && (
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-1 text-lg font-bold">
                {horizontalRules[row][col]}
              </div>
            )}

            {/* Vertical Rule (below this cell) */}
            {row < 5 && verticalRules[row]?.[col] && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-1 text-xs font-bold">
                {verticalRules[row][col]}
              </div>
            )}
          </div>
                );
              })
            )}
      </div>
    </div>
  );
}
