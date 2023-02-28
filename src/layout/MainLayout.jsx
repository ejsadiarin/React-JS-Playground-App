import Planets from '../Planets'
import TestFeat from '../TestFeat'
import Exercise1 from '../Exercise1'
import TodoList from '../TodoList'
import Quotes from '../Quotes'
import ObjectAPI from '../ObjectAPI'
import { ExerciseAPIFetch, ExerciseAPIAxios } from '../ExerciseAPI'

export default function MainLayout() {
  return (
    <>  
    <Planets />
    <TestFeat />
    <Exercise1 /> 
    <TodoList /> 
    <Quotes /> 
    <ObjectAPI /> 
    <ExerciseAPIFetch /> 
    <ExerciseAPIAxios />    
    </>
  )
}
