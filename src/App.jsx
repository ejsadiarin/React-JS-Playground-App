import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Navbar from './layout/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Login } from './components/forms/Login';
import { LibraryBooks } from './components/LibraryApp';

// TODO: make a UI that displays all the mini projects done so far
// --> can be a Sidebar that has buttons to show Components (Planets, TodoList, etc.)
// --> see Sidebar Component for the idea
export const AppContext = createContext();

function App() {
  const [word, setWord] = useState("React");
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false // React Query refetch 
      }
    }
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{word, setWord}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path='/login' element={<Login />} />
              <Route path='/library' element={<LibraryBooks />} />
            </Routes>
          </BrowserRouter> 
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App
