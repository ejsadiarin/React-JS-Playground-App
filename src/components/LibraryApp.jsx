import { useState } from "react"
import data from '../data/booksData.json'


export function LibraryBooks() {
  const [input, setInput] = useState("");
  const [newData, setNewData] = useState(data);

  const filteredBooks = () => {
    const newBooks = data.filter(book => book.title.toLowerCase().includes(input.toLowerCase()));
    setNewData(newBooks);
  }


  return (
    <div>
      <h2>Library</h2>
      <h1>Search Bar</h1>
      <input 
        type="text" 
        placeholder="Search books..."
        value={input} 
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={filteredBooks}>Search</button>
      {newData.map(book => (
      <div>
        <hr />
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p>{book.genre}</p>
      </div>
    ))}
    </div>
  );
}