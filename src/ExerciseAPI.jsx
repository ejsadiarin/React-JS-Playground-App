// Fetch data and render based on catergories
/**
 * API doc used: https://excuser-three.vercel.app/
 * --> use button for categories
 * --> when clicked: display excuse and specific category
 * --> create one using Axios and one using fetch API
 */

import { useEffect, useState } from "react"

// Fetch API version
export default function ExerciseAPI() {
  const [excuseData, setExcuseData] = useState([]);

  function fetchData(choice) {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${choice}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setExcuseData(data);
      })
  }

  // useEffect(() => {
  //   fetchData();
  // }, [choice]);

  return (
    <>
      <h1>Display Excuse:</h1>
      {excuseData.map((data) => (
        <div key={data.id}>
          <p>Excuse: {data.excuse}</p>
          <p>Category: {data.category}</p>
        </div>
      ))}
      <button onClick={() => fetchData("family")}>Family</button>
      <button onClick={() => fetchData("office")}>Office</button>
      <button onClick={() => fetchData("children")}>Children</button>
      <button onClick={() => fetchData("college")}>College</button>
      <button onClick={() => fetchData("party")}>Party</button>
      <button onClick={() => fetchData("funny")}>Funny</button>
      <button onClick={() => fetchData("unbelievable")}>Unbelievable</button>
      <button onClick={() => fetchData("developers")}>Developers</button>
      <button onClick={() => fetchData("gaming")}>Gaming</button>
      {/* can also do one button that changes dynamically based on clicked button name */}
    </>
  )
}