import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function updateTasks(selectedTask){
    console.log(selectedTask)
    const updateTasklist = tasks.filter((task) => task.text !== selectedTask)
    console.log(updateTasklist)

    setTask(updateTasklist)
  } 

  function selectedCategory(category){
    console.log(category)
    setCategory(category)
  }


    const updatedTask = tasks.filter((task)=> {
      if(category === "All"){
        return true
      }
      return task.category === category
    })
    console.log(updatedTask)

  console.log('Category state ', category)
  
  function addTask(taskText, taskCategory){
    setTask([...tasks, {'text': taskText, 'category': taskCategory}])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} getCategory ={selectedCategory}/>
      <NewTaskForm categories = {CATEGORIES} getNewTask = {addTask}/>
      <TaskList tasks = {updatedTask} getTask = {updateTasks}/>
    </div>
  );
}

export default App;
