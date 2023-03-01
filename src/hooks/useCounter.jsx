import { useState } from "react"

export const useCounter = (defaultVal = 0) => {
  const [count, setCount] = useState(defaultVal);

  const add = () => {
    setCount((count) => count + 1 );
  }

  const subtract = () => {
    setCount((count) => count - 1 );
  }

  const setToZero = () => {
    setCount(0);
  }

  return { count, add, subtract, setToZero };
} 