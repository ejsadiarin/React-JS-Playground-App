import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';

// TODO: make a UI that displays all the mini projects done so far
// --> can be a Sidebar that has buttons to show Components (Planets, TodoList, etc.)
// --> see Sidebar Component for the idea
export const AppContext = createContext();

function App() {
  const [word, setWord] = useState("React");

  return (
    <div className="App">
      <AppContext.Provider value={{word, setWord}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App
