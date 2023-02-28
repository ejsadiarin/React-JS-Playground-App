import { useContext, useState } from "react";
import { AppContext } from "./App";

function Counter() {
  const [age, setAge] = useState(0);

  function handleAge() {
    setAge((age)=> age + 1);
  }

  return (
    <>
      <h3>{age}</h3> 
      <button onClick={handleAge}>Increase age by 1</button>
    </>
  )
}

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [newWord, setNewWord] = useState("");
  const { setWord } = useContext(AppContext);

  function handleInputValue(e) {
    setInputValue(e.target.value);
    console.log(e.target.value);
  }


  return (
    <div>
      <input type="text" onChange={handleInputValue} />
      {inputValue}
      <p>useContext input here to change word in Planets component:</p>
      <input 
        type="text"
        placeholder="new word..."
        onChange={(e) => setNewWord(e.target.value)}  
      />
      <button onClick={() => setWord(newWord)}>Change word</button>
    </div>
  )
}

function ShowText() {
  const [isShowText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("white"); 

  function HideText() {
    setShowText(false);
  }
  
  function ShowText() {
    setShowText(true);
  }

  function handleTextColor() {
    setTextColor(() => textColor === "white" ? "yellow" : "white");
  }

  return (
    <>
      {isShowText &&
      <p style={{ color: textColor }}> 
      This text will either show or hide
      </p>}

      <button onClick={() => setShowText(false)}>Hide</button>
      <button onClick={ShowText}>Show</button>
      <button onClick={!isShowText ? ShowText : HideText}>Show/Hide</button>
      {/* Color change when onClick event (Inline and using handler function) */}
      <p>This button uses inline anonymous function for changing text color:</p>
      <button onClick={() => setTextColor(textColor === "white" ? "yellow" : "white")}>Change Color to Yellow</button>
      <p>This button uses a handler function for changing text color:</p>
      <button onClick={handleTextColor}>Change Color to Yellow</button>
    </>
  )
}

export default function TestFeat() {
  
  return (
    <>
    <hr />
    <Counter />
    <hr />
    <br />
    <Input />
    <br />
    <hr />
    <ShowText />
    </>
  );
}