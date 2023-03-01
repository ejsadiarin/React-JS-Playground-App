import { useCounter } from "../../hooks/useCounter";

const ExerciseCounterUI = () => {
  const { count, add, subtract, setToZero } = useCounter(0);

  return (
    <>
      <h3>ExerciseCounterUI - using useCounter custom hook</h3>
      <p>{ count }</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={setToZero}>Set to Zero</button>
    </>
  );
}

export default ExerciseCounterUI