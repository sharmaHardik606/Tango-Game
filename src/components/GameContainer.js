"use client";

import { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import Timer from "./Timer";

export default function GameContainer() {
  // Game grid state (6x6)
  const [gridState, setGridState] = useState(
    Array.from({ length: 6 }, () => Array(6).fill("empty"))
  );

  // Timer state in seconds
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Toggle cell state logic
  const handleToggle = (row, col) => {
    setGridState((prevGrid) => {
      const newGrid = prevGrid.map((r) => [...r]);
      const current = newGrid[row][col];

      if (current === "empty") newGrid[row][col] = "orange";
      else if (current === "orange") newGrid[row][col] = "blue";
      else newGrid[row][col] = "empty";

      return newGrid;
    });
  };

  // Clear grid logic (reset to all empty for now)
  const clearGrid = () => {
    setGridState(Array.from({ length: 6 }, () => Array(6).fill("empty")));
    setSecondsElapsed(0);
  };

  return (
    <div>
      {/* Timer can be shown here or inside GameBoard */}
      <Timer secondsElapsed={secondsElapsed} />

      <GameBoard gridState={gridState} onToggle={handleToggle} />

      <button
        onClick={clearGrid}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
      >
        Clear
      </button>
    </div>
  );
}
