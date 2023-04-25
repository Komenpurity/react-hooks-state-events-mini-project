import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task,setTask] = useState(TASKS) 
  const [selectedCategory,setSelectedCategory] = useState("All") 

  function handleDelete(deletedItem){
    setTask(task.filter((item)=>item.text !== deletedItem))
  }

  const itemDisplayed = task.filter(
    (item)=>{ 
    if(selectedCategory==='All') return true
    return selectedCategory === item.category
   } 
   )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} /> 
      <NewTaskForm />
      <TaskList handleDelete={handleDelete} task={TASKS}/> 
    </div>
  );
}

export default App;
