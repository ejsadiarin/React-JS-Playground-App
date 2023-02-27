import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Planets from './Planets'
import Sidebar from './Sidebar'
import Exercise1 from './Exercise1'
import TodoList from './TodoList'
import Quotes from './Quotes'
import ObjectAPI from './ObjectAPI'
import { ExerciseAPIFetch, ExerciseAPIAxios } from './ExerciseAPI'

// TODO: make a UI that displays all the mini projects done so far
// --> can be a Sidebar that has buttons to show Components (Planets, TodoList, etc.)
// --> see Sidebar Component for the idea
function App() {
  return (
    <div className="App">
     {/* <Planets /> */}
     <hr />
     {/* <Sidebar /> */}
      {/* <Exercise1 /> */}
      {/* <TodoList /> */}
      {/* <Quotes /> */}
      {/* <ObjectAPI /> */}
      {/* <ExerciseAPIFetch /> */}
      <ExerciseAPIAxios />
    </div>
  )
}

export default App
