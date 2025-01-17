import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  //console.log(tasks)
  const [category, setCategory] = useState("All");

  const displayTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  function handleDeleteTask(Text){
    setTasks(tasks.filter((task) => task.text !== Text))
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      cat={category}
      onSelectCategory={setCategory}
      />
      <NewTaskForm />
      <TaskList tasks={displayTasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
