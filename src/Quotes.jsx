import { useEffect, useState } from "react";

export default function Quotes() {
  const [excuses, setExcuses] = useState([]);
  const [quote, setQuote] = useState("");
  const [catFact, setCatFact] = useState("");
  const [catFactLength, setCatFactLength] = useState("");
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState("");
  
  
  function fetchExcuse() {
    fetch('https://excuser-three.vercel.app/v1/excuse/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExcuses(data);
      })    
  }

  // function fetchQuote() {
  //   fetch('https://www.tateapi.com/api/quote')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setExcuse(data.quote);
  //     })    
  // }

  function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCatFact(data.fact);
        setCatFactLength(data.length);
      })
  }

  // fetches twice when browser refresh (mounts -> render -> unmounts)
  // useEffect(() => {
  //   fetchCatFact();
  // }, []);

  function fetchPredictedAge() {
    fetch(`https://api.agify.io/?name=${name}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPredictedAge(data.age);
      })
  }

    return (
      <>
        <h3>Excuses API (Array response):</h3> 
        {excuses.map(data => (
          <div key={data.id}>
            <h3>Category: {data.category}</h3>
            <p>{data.excuse}</p>
          </div>
        ))}
        <button onClick={fetchExcuse}>Get Excuse</button>
        
        {/* <hr /> */}
        {/* <p>{quote}</p> */}
        {/* <button onClick={fetchQuote}>Get Quote</button> */}

        <hr />
        <h3>Cat Fact API:</h3>
        <p>{catFact}</p>
        <p>{`length: ${catFactLength}`}</p>
        <button onClick={fetchCatFact}>Get Cat Fact</button>

        <hr />
        {/* fetch data based on input */}
        <h3>Predict Age API based on input:</h3>
        <input 
          type="text"
          placeholder="Type a name..." 
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={fetchPredictedAge}>Predict Age</button>
        <h3>Predicted Age: {predictedAge}</h3> 
        <h3>Name: {name}</h3>         
      </>
    )
}

/**
 * Takeaway -> fetching data from an API
 * (1) ExcuseAPI [ARRAY]: need to use [] and map (array methods) when fetching data from an array
 * --> cases: when the response of the external API returns an array (most likely an array of objects)
 * 
 * (2) CatFactAPI [OBJECT]: use empty string
 * --> cases: when response returns an object
 * 
 * (3) ALWAYS have the appropriate type when rendering data from an API
 * --> if API returns Array: use map to render data
 * --> if API returns Object: use string
 * 
 * (4) API Object response: can use useState(null) or useState({}) as default initial value
 * --> then access properties of that object by:
 * --> first in fetch: .then(data => setStateVar(data))
 * --> inside return render: stateVar.{key}
 * ex. 
 * ```jsx
 * 
 * fetch(url)
 *  .then(res => res.json())
 *  .then(data => setPredictedAge(data))
 * return (
 * <>
 * <h3>{predictedAge.name}</h3>
 * <p>{predictedAge.age}</p>
 * </>
 * )
 * 
 * ```
 * --> for live example see ObjectAPI.jsx (Component)
 */