import { useState } from "react";
import Task from "./state_props/Task";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTask(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false,
    };
    
    setTodoList([
      ...todoList,
      task
    ]);

  };

  function handleDeleteTask(id) {
    setTodoList(todoList.filter((task) => 
      task.id !== id
    ))
  }

  function handleUpdateTask(id) {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: true };
      } else {
        return task;
      }
    }))
  }

  function handleUncomplete(id) {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: false };
      }
      return task;
    }))
  }

  return (
    <>
      <div>
        <input type="text" onChange={handleNewTask}/>
        <button onClick={handleAddTask}>Add Task</button>
        
        <h3>My Todos:</h3>
        
        {todoList.map((task) => {
          return (
            <div>
              <Task 
                taskName={task.taskName}
                id={task.id}
                isCompleted={task.isCompleted}
                handleDeleteTask={handleDeleteTask}
                handleUpdateTask={handleUpdateTask}
                handleUncomplete={handleUncomplete}
              />
            </div>
          ) 
        })}

      </div>
    </>
  );
}