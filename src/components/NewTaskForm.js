import React, {useState} from "react";

function NewTaskForm({categories, getNewTask}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  const newCategories = categories.filter((category) => category !== "All")

  console.log(text)
  console.log(category)
  function handleClick(e){
    e.preventDefault()
    getNewTask(text, category)
  }
  return (
    <form className="new-task-form" onSubmit = {handleClick}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=> setCategory(e.target.value)}>
          {newCategories.map((category) => <option key={category} >{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
