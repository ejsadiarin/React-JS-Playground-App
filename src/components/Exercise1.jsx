import { useState } from "react";

export default function Exercise1() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((count) => count + 1);
  }
  
  function handleDecrease() {
    setCount((count) => count - 1);
  }

  function handleZero() {
    setCount(0);
  }
  
  return (
    <>
      <h3>{count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleZero}>Set to Zero</button>
    </>
  );
}