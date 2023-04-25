import React from "react";
import Task from './Task'

function TaskList({task,handleDelete}) {

  return (
    <div className="tasks">
         {task.map((tasks,index) => {
            return (<Task 
              handleDelete={handleDelete} 
              key={index}
              text= {tasks.text}
              category = {tasks.category} 
            />)
         })}
    </div>
  );
}

export default TaskList;
