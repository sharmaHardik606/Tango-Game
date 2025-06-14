"use client";

import { useState, useEffect, useMemo } from "react";
import levels from "@/levels";
import Timer from "@/components/Timer";
import { checkErrors } from "@/utils/checkErrors";
import ErrorOverlay from "@/components/ErrorOverlay";
import { PiClockCountdownBold } from "react-icons/pi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";




export default function GameBoard() {

  

  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timerResetKey, setTimerResetKey] = useState(0);

  const [currentLevel, setCurrentLevel] = useState(0);
  const level = useMemo(() => levels[currentLevel], [currentLevel]);

  const [gridState, setGridState] = useState(() =>
    level.cellGrid.map(row => [...row])
  );
  const [initialGrid, setInitialGrid] = useState(() =>
    level.cellGrid.map(row => [...row])
  );


  const [horizontalRules, setHorizontalRules] = useState(level.horizontalRules);
  const [verticalRules, setVerticalRules] = useState(level.verticalRules);

  const [errorFlags, setErrorFlags] = useState({
    rowErrors: Array(6).fill(false),
    colErrors: Array(6).fill(false),
    ruleViolations: [],
  });
  useEffect(() => {
    const newGrid = level.cellGrid.map(row => [...row]);
    setGridState(newGrid);
    setInitialGrid(newGrid);
    setHorizontalRules(level.horizontalRules);
    setVerticalRules(level.verticalRules);
    setErrorFlags({
      rowErrors: Array(6).fill(false),
      colErrors: Array(6).fill(false),
      ruleViolations: [],
    });
  }, [level]);

  const handleToggle = (row, col) => {
    if (initialGrid[row][col] !== "empty") return;

    setGridState(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);
      const current = newGrid[row][col];

      if (current === "empty") newGrid[row][col] = "orange";
      else if (current === "orange") newGrid[row][col] = "blue";
      else newGrid[row][col] = "empty";

      const errors = checkErrors(newGrid, level.horizontalRules, level.verticalRules);
      setErrorFlags(errors);

      if (
        checkWin(newGrid) &&
        errors.rowErrors.every(e => !e) &&
        errors.colErrors.every(e => !e) &&
        errors.ruleViolations.length === 0
      ) {
        alert(`🎉 You win in ${secondsElapsed} seconds!`);
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
    return  true;
  };

  const clearGrid = () => {
    setGridState(initialGrid.map(row => [...row]));
    setSecondsElapsed(0);
    setTimerResetKey(prev => prev + 1);
    setErrorFlags({
      rowErrors: Array(6).fill(false),
      colErrors: Array(6).fill(false),
      ruleViolations: [],
    });
  };

  const nextLevel = () => {
    const next = currentLevel + 1;
    if (next < levels.length) {
      setCurrentLevel(next);
      setSecondsElapsed(0);
      setTimerResetKey(prev => prev + 1);
    }
  };

  const prevLevel = () => {
  const previous = currentLevel - 1;
  if (previous >= 0) {
    setCurrentLevel(previous);
    setSecondsElapsed(0);
    setTimerResetKey(prev => prev + 1);
  }
  };


  return (
    <div className="items-center justify-center w-auto h-auto  bg-white p-2 sm:p-5 rounded-2xl">
      <div className="w-full h-auto mb-2 flex items-center justify-between  border-b-2 border-gray-100 p-2">
        <h1>Tango Game - Level {currentLevel + 1}</h1>
        <div className="flex items-center gap-1 ">
          <PiClockCountdownBold className="text-lg"/> 
          <Timer onTick={(t) => setSecondsElapsed(t)} resetTrigger={timerResetKey} />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-0.5 z-10">
        {gridState.map((rowArr, row) =>
          rowArr.map((cell, col) => {
            const isGray = (row + col) % 2 === 1;

              const hasRowError = errorFlags.rowErrors[row];
              const hasColError = errorFlags.colErrors[col];

            return (
              <div key={`${row}-${col}`} className="relative">
                <div
                  className={`h-13 w-13  sm:h-18 sm:w-18 border rounded-2xl border-gray-400 ${
                    isGray ? "bg-gray-100" : "bg-white"
                  } ${hasRowError || hasColError ? "border-red-500" : ""} flex items-center justify-center`}
                  onClick={() => handleToggle(row, col)}
                >

                  {cell !== "empty" && (
                    <div
                      className={`h-8 w-8 sm:w-10 sm:h-10 rounded-full ${
                        cell === "orange" ? "bg-orange-500" : "bg-blue-500"
                      }`}
                    ></div>
                  )}
                </div>

                  <ErrorOverlay
                  row={row}
                   col={col}
                    horizontalRule={horizontalRules[row]?.[col]}
                    verticalRule={verticalRules[row]?.[col]}
                     ruleViolations={errorFlags.ruleViolations}
                  />

              </div>
            );
          })
        )}
      </div>
      <div className=" w-full flex gap-5 items-center justify-center mt-5 border-t-2 border-gray-100 p-2">

          <button
            className="flex items-center gap-1 bg-green-500 text-white sm:px-4 px-2 py-2 rounded-lg hover:bg-green-700 cursor-pointer text-sm active:bg-green-800"
            onClick={prevLevel}
          >
            <FaRegArrowAltCircleLeft className="text-lg"/>
            Prev Level 
          </button>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer text-sm active:bg-blue-800"
            onClick={clearGrid}
          >
            Clear
          </button>
          
          <button
            className="flex items-center gap-1 bg-green-500 text-white sm:px-4 px-2 py-2 rounded-lg hover:bg-green-700 cursor-pointer text-sm active:bg-green-800"
            onClick={nextLevel}
          >
            Next Level
            <FaRegArrowAltCircleRight  className="text-lg"/>
          </button>
        </div>
    </div>
  );
}
