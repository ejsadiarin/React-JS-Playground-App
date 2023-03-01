import Planets from '../components/state_props/Planets'
import TestFeat from '../components/state_props/TestFeat'
import Exercise1 from '../components/state_props/Exercise1'
import TodoList from '../components/TodoList'
import Quotes from '../components/api_axios/Quotes'
import ObjectAPI from '../components/api_axios/ObjectAPI'
import { ExerciseAPIFetch, ExerciseAPIAxios } from '../components/api_axios/ExerciseAPI'
import { useToggle } from '../hooks/useToggle'
import ExerciseCounterUI from '../components/state_props/ExerciseCounterUI'

// uses useToggle custom hook
// TODO: use state management and useToggle for Sidebar component
{/* 
  like this:
  <button onClick={toggle}>Show Planets</button>
  { isVisible && <Planets /> } 
*/}

export default function MainLayout() {
  const [isVisible, toggle] = useToggle();
  const [isVisibleAPI, toggleAPI] = useToggle();
  const [isVisibleExercises, toggleExercises] = useToggle();
  const [isVisibleStateProps, toggleStateProps] = useToggle();
  const [isVisibleTodo, toggleTodo] = useToggle();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    <button onClick={toggle}>Show/Hide Planets</button>
    { isVisible && <Planets /> }
    
    <button onClick={toggleStateProps}>Show/Hide State_Props</button>
    { isVisibleStateProps && <TestFeat /> }
    
    
    <button onClick={toggleTodo}>Show/Hide TodoList</button>
    { isVisibleTodo && <TodoList />  }

    <button onClick={toggleAPI}>Show/Hide API render components</button>
    { isVisibleAPI &&
      <div style={{ backgroundColor: "darkgreen" }}>
        <Quotes/> <ObjectAPI />
      </div>
    }

    <button onClick={toggleExercises}>Show/Hide Exercises</button>
    { isVisibleExercises && 
      <div style={{ backgroundColor: "darkred" }}>
        <Exercise1 /> 
        <ExerciseAPIFetch /> 
        <ExerciseAPIAxios />   
        <ExerciseCounterUI /> 
      </div>
    }

    </div>
  )
}
