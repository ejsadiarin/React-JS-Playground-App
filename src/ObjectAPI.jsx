import { useState } from "react";

export default function ObjectAPI() {
  const [predictedAge, setPredictedAge] = useState(null);

  return (
    <>
      <h3>Name:</h3>
      <h3>Predicted Age:</h3>
      <h3>Count:</h3>
    </>
  );
}