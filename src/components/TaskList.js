import React from "react";
import Task from "./Task.js"

function TaskList({tasks, handleDeleteTask}) {
  const list = tasks.map((task) =>(
    <Task
    text={task.text}
    category={task.category} 
    handleDeleteTask={handleDeleteTask}
    />
  ))
  return (
    <div className="tasks">
      {list}
    </div>
  );
}

export default TaskList;
