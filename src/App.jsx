import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Navbar from './layout/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// TODO: make a UI that displays all the mini projects done so far
// --> can be a Sidebar that has buttons to show Components (Planets, TodoList, etc.)
// --> see Sidebar Component for the idea
export const AppContext = createContext();

function App() {
  const [word, setWord] = useState("React");
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{word, setWord}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/navbar" element={<Navbar />} />
            </Routes>
          </BrowserRouter> 
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App
