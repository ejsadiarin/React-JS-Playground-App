import { useState } from "react";

export default function Quotes() {
  const [excuse, setExcuse] = useState("");
  
  fetch('https://excuser-three.vercel.app/v1/excuse/')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setExcuse(data.excuse);
    })

    return (
      <>
        <p>{excuse}</p>
        <button>Get Quote</button>
      </>
    )
}