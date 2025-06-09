"use client";
import React from "react";

export default function Timer({ secondsElapsed }) {
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return <p>{formatTime(secondsElapsed)}</p>;
}
