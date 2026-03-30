"use client";

import { useState, useEffect } from "react";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ViewerCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(randomBetween(34, 98));
    const tick = () => {
      setCount(randomBetween(34, 98));
      setTimeout(tick, randomBetween(45000, 90000));
    };
    const t = setTimeout(tick, randomBetween(45000, 90000));
    return () => clearTimeout(t);
  }, []);

  if (count === null) return null;

  return (
    <p className="text-sm text-gray-400">
      👀 {count} people reading this right now
    </p>
  );
}
