"use client";
import { useEffect, useState } from "react";

export default function Timer({ onTick, resetTrigger }) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => {
        const newTime = prev + 1;
        onTick?.(newTime); // report to GameBoard
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //Reset when state chengas
  useEffect(() => {
    setSecondsElapsed(0);
  }, [resetTrigger]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return <p>{formatTime(secondsElapsed)}</p>;
}

