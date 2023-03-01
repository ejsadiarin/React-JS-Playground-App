import { useState } from "react";

export default function ObjectAPI() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  function fetchPredictedAge() {
    fetch(`https://api.agify.io/?name=${name}`)
      .then(res => res.json())
      .then(data => {
        setPredictedAge(data);
      })

  }

  return (
    <>
      <input
      type="text" 
      placeholder="Ex. Ej..."
      onChange={(e) => {
        setName(e.target.value);
      }}
      />
      <button onClick={fetchPredictedAge}>Fetch Data</button>
      <h3>Name: {predictedAge?.name}</h3>
      <h3>Predicted Age: {predictedAge?.age}</h3>
      <h3>Count: {predictedAge?.count}</h3>
    </>
  );
}
/**
 * API Object response: can use useState(null) or useState({}) as default initial value
 * --> then access properties of that object by:
 * --> first in fetch: .then(data => setStateVar(data))
 * --> inside return render: stateVar?.{key}
 * --> the ? means null is allowed (since null is default initial value, need to activate first)
 */