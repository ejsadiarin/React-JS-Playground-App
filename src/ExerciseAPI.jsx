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
  const [choice, setChoice] = useState("");
  const [excuseData, setExcuseData] = useState([]);

  function fetchData() {
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
  
  function handleFamily() {
    setChoice(() => "family");
    fetchData();
  }
  
  function handleOffice() {
    setChoice(() => "office");
    fetchData();
  }

  function handleChildren() {
    setChoice(() => "children");
    fetchData();
  }


  function handleCollege() {
    setChoice(() => "college");
    fetchData();
  }


  function handleParty() {
    setChoice(() => "party");
    fetchData();
  }


  function handleFunny() {
    setChoice(() => "funny");
    fetchData();
  }


  function handleUnbelievable() {
    setChoice(() => "unbelievable");
    fetchData();
  }


  function handleDevelopers() {
    setChoice(() => "developers");
    fetchData();
  }


  function handleGaming() {
    setChoice(() => "gaming");
    fetchData();
  }

  return (
    <>
      <h1>Display Excuse:</h1>
      {excuseData.map((data) => (
        <div key={data.id}>
          <p>Excuse: {data.excuse}</p>
          <p>Category: {data.category}</p>
        </div>
      ))}
      <button onClick={handleFamily}>Family</button>
      <button onClick={handleOffice}>Office</button>
      <button onClick={handleChildren}>Children</button>
      <button onClick={handleCollege}>College</button>
      <button onClick={handleParty}>Party</button>
      <button onClick={handleFunny}>Funny</button>
      <button onClick={handleUnbelievable}>Unbelievable</button>
      <button onClick={handleDevelopers}>Developers</button>
      <button onClick={handleGaming}>Gaming</button>
      {/* can also do one button that changes dynamically based on clicked button name */}
    </>
  )
}